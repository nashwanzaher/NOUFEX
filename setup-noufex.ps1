$ErrorActionPreference = 'Stop'

$root = 'C:\Users\zaher\projects'

$projects = @{
    'NOUFEX_AI'   = @('backend', 'frontend', 'ai-models', 'infrastructure')
    'NOUFEX_ECM'  = @('backend', 'frontend', 'mobile', 'infrastructure')
    'NOUFEX_ERP'  = @('backend', 'frontend', 'reports', 'infrastructure')
    'NOUFEX_VPN'  = @('backend', 'frontend', 'desktop', 'mobile', 'infrastructure')
    'NOUFEX_MKT'  = @('backend', 'frontend', 'scheduler', 'infrastructure')
}

foreach ($proj in $projects.GetEnumerator()) {
    $projPath = Join-Path $root $proj.Key
    foreach ($sub in $proj.Value) {
        $fullPath = Join-Path $projPath $sub
        if (-not (Test-Path -LiteralPath $fullPath)) {
            New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
            Write-Host "Created: $fullPath"
        } else {
            Write-Host "Exists:  $fullPath"
        }
    }
}

Write-Host "`nDone."
