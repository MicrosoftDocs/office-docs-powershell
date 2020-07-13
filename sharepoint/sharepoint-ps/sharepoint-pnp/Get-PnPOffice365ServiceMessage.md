---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpoffice365servicemessage
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPOffice365ServiceMessage
---

# Get-PnPOffice365ServiceMessage

## SYNOPSIS

**Required Permissions**

  * Microsoft Office 365 Management API: ServiceHealth.Read

Gets the service messages regarding services in Office 365 from the Office 365 Management API

## SYNTAX 

```powershell
Get-PnPOffice365ServiceMessage [-Workload <Office365Workload>]
                               [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPOffice365ServiceMessage
```

Retrieves the service messages regarding services in Office 365

## PARAMETERS

### -ByPassPermissionCheck
Allows the check for required permissions in the access token to be bypassed when set to $true

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Workload
Allows retrieval of the service messages for only one particular service. If not provided, the service messages of all services will be returned.

```yaml
Type: Office365Workload
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)