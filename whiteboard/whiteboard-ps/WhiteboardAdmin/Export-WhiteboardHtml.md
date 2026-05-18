---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/export-whiteboardhtml
applicable: Microsoft Whiteboard
title: Export-WhiteboardHtml
schema: 2.0.0
author: officedocspr
ms.author: odocspr
ms.reviewer:
---

# Export-WhiteboardHtml

## SYNOPSIS

Exports Microsoft Whiteboards to HTML files using the Microsoft Graph API.

## SYNTAX

### User mode

```
Export-WhiteboardHtml -Mode User -Environment <String> [-OutputPath <String>] [-Force]
 [-LogLevel <String>] [-ThrottleDelayMs <Int32>] [-LoginAs <String>] [<CommonParameters>]
```

### Admin mode

```
Export-WhiteboardHtml -Mode Admin -TenantId <String> -Environment <String>
 [-UserListCsv <String>] [-UserList <String[]>] [-OutputPath <String>] [-Force]
 [-LogLevel <String>] [-ThrottleDelayMs <Int32>] [-MaxUsers <Int32>] [-LoginAs <String>]
 [<CommonParameters>]
```

## DESCRIPTION

Exports Microsoft Whiteboards to HTML files using the Microsoft Graph API. The command works in two
modes:

- **User mode**: exports your own whiteboards (no admin rights needed).
- **Admin mode**: exports whiteboards for all users in a tenant, or a specific subset.

### Prerequisites

- PowerShell 5.1 or later (PowerShell 7+ recommended for large tenants).
- Microsoft Graph PowerShell SDK. Install with `Install-Module Microsoft.Graph -Scope CurrentUser`.

### Required permissions

The permissions below are delegated — they apply to the signed-in user account, not an app
registration.

| Mode | Permission | Purpose |
|------|-----------|---------|
| User | User.Read | Read your own profile to get your user ID |
| User | Files.Read | Read your own OneDrive to find and convert whiteboard files |
| Admin | User.Read.All | List all users in the tenant |
| Admin | Files.Read.All | Read any user's OneDrive to find and convert whiteboard files |

Admin mode permissions require admin consent. To grant it:

1. Go to **Entra admin center** \> **Applications** \> **App registrations**.
2. Find **Microsoft Graph PowerShell**.
3. Go to **API permissions** \> **Add a permission** \> **Microsoft Graph** \> **Delegated
   permissions**.
4. Add **User.Read.All** and **Files.Read.All**.
5. Click **Grant admin consent**.

### Output structure

**User mode**:

```
Downloads\
  WhiteboardExports\
    Whiteboard Title 1.html
    Whiteboard Title 2.html
    export_log.txt
    export_state.json
    export_summary.json
```

**Admin mode**:

```
Downloads\
  WhiteboardExports_contoso.onmicrosoft.com\
    alice@contoso.com\
      Whiteboard Title 1.html
    bob@contoso.com\
      Quarterly Planning.html
      Team Brainstorm.html
    export_log.txt
    export_state.json
    export_summary.json
```

| File | Description |
|------|-------------|
| \*.html | Exported whiteboard content |
| export\_log.txt | Timestamped log of every action (always written, regardless of `-LogLevel`) |
| export\_state.json | Run state used for resume and retry |
| export\_summary.json | Final statistics: users processed, exports succeeded/failed, duration |

### Resuming an interrupted run

If the export is interrupted (network failure, session timeout, manual stop), run the same command
again. It automatically picks up where it left off — users already processed are skipped. To ignore
the saved state and start over from scratch, use the `-Force` parameter.

## EXAMPLES

### EXAMPLE 1

```powershell
Export-WhiteboardHtml -Mode User -Environment AzureCloud
```

Export your own whiteboards from a commercial tenant.


### EXAMPLE 2

```powershell
Export-WhiteboardHtml -Mode Admin -TenantId contoso.onmicrosoft.com -Environment AzureCloud
```

Export whiteboards for all users in a commercial tenant.

### EXAMPLE 3

```powershell
Export-WhiteboardHtml -Mode Admin -TenantId contoso.onmicrosoft.com -Environment AzureCloud `
    -UserList @('alice@contoso.com', 'bob@contoso.com')
```

Export whiteboards for a specific list of users provided inline.

### EXAMPLE 4

```powershell
Export-WhiteboardHtml -Mode Admin -TenantId contoso.onmicrosoft.com -Environment AzureCloud `
    -UserListCsv C:\migration\users.csv
```

Export whiteboards for users listed in a CSV file. The CSV must have a column named
`UserPrincipalName` (or the UPNs in the first column).

### EXAMPLE 5

```powershell
Export-WhiteboardHtml -Mode Admin -TenantId contoso.onmicrosoft.com -Environment AzureCloud `
    -MaxUsers 10
```

Export only the first 10 users (useful for testing).

### EXAMPLE 6

```powershell
Export-WhiteboardHtml -Mode Admin -TenantId contoso.onmicrosoft.com -Environment AzureCloud `
    -OutputPath C:\Exports
```

Save output to a custom folder instead of the default Downloads folder.

### EXAMPLE 7

```powershell
Export-WhiteboardHtml -Mode Admin -TenantId contoso.onmicrosoft.com -Environment AzureCloud `
    -LoginAs admin@contoso.com
```

Sign in as a specific account (useful when multiple accounts are cached).

## PARAMETERS

### -Mode

Specifies the export mode. Use `User` to export your own whiteboards or `Admin` to export
whiteboards for all users (or a subset) in a tenant.

```yaml
Type: System.String
Parameter Sets: (All)
Accepted values: User, Admin

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Environment

The target cloud environment. Must match the cloud your tenant is in. Using the wrong value causes
authentication to fail or connects to the wrong tenant.

| Value | Cloud | Graph endpoint |
|-------|-------|----------------|
| AzureCloud | Commercial / GCC | graph.microsoft.com |
| AzureUSGovernment | GCC-High | graph.microsoft.us |
| AzureUSDoD | DoD | dod-graph.microsoft.us |
| AzureUSNat | Air-Gap (USNat) | graph.eaglex.ic.gov |
| AzureUSSec | Air-Gap (USSec) | graph.microsoft.scloud |

```yaml
Type: System.String
Parameter Sets: (All)
Accepted values: AzureCloud, AzureUSGovernment, AzureUSDoD, AzureUSNat, AzureUSSec

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId

The tenant domain or GUID (for example, `contoso.onmicrosoft.com`). Required in Admin mode.

```yaml
Type: System.String
Parameter Sets: Admin

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserListCsv

Path to a CSV file containing the UPNs of users to process. The CSV must have a column named
`UserPrincipalName` (or the UPNs in the first column). Admin mode only.

```yaml
Type: System.String
Parameter Sets: Admin

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserList

An inline array of UPNs to process. Admin mode only.

```yaml
Type: System.String[]
Parameter Sets: Admin

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputPath

Base directory for output. Defaults to the current user's Downloads folder.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: Downloads folder
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

Discard saved state and start a completely fresh run.

```yaml
Type: System.Management.Automation.SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogLevel

Console verbosity level: `Quiet`, `Normal`, or `Verbose`. The export\_log.txt file always contains
full details regardless of this setting.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Accepted values: Quiet, Normal, Verbose

Required: False
Position: Named
Default value: Normal
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThrottleDelayMs

Milliseconds to pause between API calls. Increase this value for large tenants to avoid throttling.

```yaml
Type: System.Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 100
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxUsers

Maximum number of users to process. Admin mode only. Useful for testing.

```yaml
Type: System.Int32
Parameter Sets: Admin
Aliases:

Required: False
Position: Named
Default value: 9999
Accept pipeline input: False
Accept wildcard characters: False
```

### -LoginAs

UPN hint shown before the sign-in prompt. Useful when multiple accounts are cached.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose,
-WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216)

## INPUTS

## OUTPUTS

## NOTES

A browser window opens on first run to sign in. After that, your session is cached and sign-in is
not required again unless the token expires.

For details on the module, see the [overview page](../../docs-conceptual/overview.md).

### Troubleshooting

- **Sign-in window does not appear**: Run `Connect-MgGraph -Scopes 'User.Read.All', 'Files.Read.All', 'Sites.Read.All'` manually in your PowerShell session first, then re-run the export.
- **"Insufficient privileges" or "Access denied" errors**: Admin consent may not have been granted for `User.Read.All` and `Files.Read.All`. See Required Permissions. After granting consent, run with `-Force` to reconnect with the updated permissions.
- **A user is skipped with "No Whiteboards folder / no OneDrive"**: The user has never activated OneDrive, or their OneDrive has been deleted. This is expected and not an error.
- **Some whiteboards failed to export**: Run [Invoke-WhiteboardHtmlRetry](Invoke-WhiteboardHtmlRetry.md) with the same parameters to re-attempt them. Check `export_log.txt` for per-failure error details.
- **Throttling / slow runs on large tenants**: Increase the delay between API calls with `-ThrottleDelayMs 500`.
- **Exported HTML is empty or corrupted**: The whiteboard may be empty or in a format the Graph API cannot convert. Check `export_log.txt` for details on that specific file.
- **Run is stuck / making no progress**: Run with `-LogLevel Verbose` to see detailed output, including each Graph API call.

## RELATED LINKS

[Invoke-WhiteboardHtmlRetry](Invoke-WhiteboardHtmlRetry.md)
