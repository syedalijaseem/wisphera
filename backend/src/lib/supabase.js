import { createClient } from "@supabase/supabase-js";
import { requiredEnv } from "../utils/env.js";

const supabase = createClient(
  requiredEnv("SUPABASE_URL"),
  requiredEnv("SUPABASE_SERVICE_KEY")
);

export default supabase;
