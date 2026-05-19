create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  client_name text,
  amount numeric,
  created_at timestamp default now()
);

create table if not exists expenses (
  id uuid primary key default gen_random_uuid(),
  order_id uuid,
  category text,
  amount numeric,
  created_at timestamp default now()
);
