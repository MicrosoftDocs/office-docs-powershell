---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpoffice365currentservicestatus
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPOffice365CurrentServiceStatus
---

# Get-PnPOffice365CurrentServiceStatus

## SYNOPSIS
Gets current service status of the Office 365 Services from the Office 365 Management API

## SYNTAX 

```powershell
Get-PnPOffice365CurrentServiceStatus [-Workload <Office365Workload>]
                                     [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Office 365 Management API: ServiceHealth.Read

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPOffice365CurrentServiceStatus
```

Retrieves the current service status of all Office 365 services

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPOffice365CurrentServiceStatus -Workload SharePoint
```

Retrieves the current service status of SharePoint Online

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
Allows retrieval of the current service status of only one particular service. If not provided, the current service status of all services will be returned.

```yaml
Type: Office365Workload
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)