---
external help file: WhiteboardAdmin-help.xml
Module Name: WhiteboardAdmin
online version: https://learn.microsoft.com/powershell/module/whiteboard/invoke-whiteboardhtmlretry
applicable: Microsoft Whiteboard
title: Invoke-WhiteboardHtmlRetry
schema: 2.0.0
author: officedocspr
ms.author: odocspr
ms.reviewer:
---

# Invoke-WhiteboardHtmlRetry

## SYNOPSIS

Retries whiteboard HTML exports that failed in a previous Export-WhiteboardHtml run.

## SYNTAX

### User mode

```
Invoke-WhiteboardHtmlRetry -Mode User -Environment <String> [-OutputPath <String>]
 [-LoginAs <String>] [-ThrottleDelayMs <Int32>] [<CommonParameters>]
```

### Admin mode

```
Invoke-WhiteboardHtmlRetry -Mode Admin -TenantId <String> -Environment <String>
 [-OutputPath <String>] [-LoginAs <String>] [-ThrottleDelayMs <Int32>] [<CommonParameters>]
```

## DESCRIPTION

Individual whiteboard exports can fail due to transient Graph API errors. The
`Export-WhiteboardHtml` command retries each whiteboard up to 3 times automatically during the run.
If a whiteboard still fails after all retries, it is recorded in `export_state.json`.

Run `Invoke-WhiteboardHtmlRetry` after an export to re-attempt all recorded failures. Use the same
`-Mode`, `-TenantId`, `-Environment`, and `-OutputPath` values as the original export.

If there are no recorded failures, the command exits immediately with a message confirming nothing
needs to be retried.

## EXAMPLES

### EXAMPLE 1

```powershell
Invoke-WhiteboardHtmlRetry -Mode Admin -TenantId contoso.onmicrosoft.com -Environment AzureCloud
```

Retry failed exports from an Admin run on a commercial tenant.

### EXAMPLE 2

```powershell
Invoke-WhiteboardHtmlRetry -Mode User -Environment AzureCloud
```

Retry failed exports from a User run.

### EXAMPLE 3

```powershell
Invoke-WhiteboardHtmlRetry -Mode Admin -TenantId contoso.onmicrosoft.com -Environment AzureCloud `
    -OutputPath C:\Exports
```

Retry with a custom output path (must match the original export).

## PARAMETERS

### -Mode

Must match the original export: `User` or `Admin`.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Accepted values: User, Admin

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Environment

Must match the original export. The target cloud environment.

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
Aliases:
Accepted values: AzureCloud, AzureUSGovernment, AzureUSDoD, AzureUSNat, AzureUSSec

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TenantId

Must match the original export. The tenant domain or GUID (for example,
`contoso.onmicrosoft.com`). Required in Admin mode.

```yaml
Type: System.String
Parameter Sets: Admin
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutputPath

Must match the original export if a custom path was used. Defaults to the current user's Downloads
folder.

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

### -ThrottleDelayMs

Milliseconds to pause between API calls.

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

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable,
-InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose,
-WarningAction, and -WarningVariable. For more information, see
[about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216)


## NOTES

For details on the module, see the [overview page](../../docs-conceptual/overview.md).

## RELATED LINKS

[Export-WhiteboardHtml](Export-WhiteboardHtml.md)

For details on user IDs, see the [overview page](../../docs-conceptual/overview.md).


