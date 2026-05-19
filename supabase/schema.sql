create extension if not exists "pgcrypto";

create table if not exists erp_projects (
  id uuid primary key default gen_random_uuid(),
  project_code text unique not null,
  client_name text not null,
  city text,
  quantity integer default 0,
  status text default 'order_created',
  revenue numeric default 0,
  progress integer default 0,
  created_at timestamptz default now()
);

create table if not exists erp_project_expenses (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references erp_projects(id) on delete cascade,
  category text not null,
  team_name text,
  location text,
  amount numeric default 0,
  bill_url text,
  approval_status text default 'pending',
  payment_status text default 'unpaid',
  created_at timestamptz default now()
);

create table if not exists erp_operations (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references erp_projects(id) on delete cascade,
  department text not null,
  assigned_to text,
  total_quantity integer default 0,
  completed_quantity integer default 0,
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists erp_activity_logs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references erp_projects(id) on delete cascade,
  activity text not null,
  created_by text,
  created_at timestamptz default now()
);

alter table erp_projects enable row level security;
alter table erp_project_expenses enable row level security;
alter table erp_operations enable row level security;
alter table erp_activity_logs enable row level security;
