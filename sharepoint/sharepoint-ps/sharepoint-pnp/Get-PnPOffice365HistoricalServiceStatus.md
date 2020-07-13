---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpoffice365historicalservicestatus
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPOffice365HistoricalServiceStatus
---

# Get-PnPOffice365HistoricalServiceStatus

## SYNOPSIS

**Required Permissions**

  * Microsoft Office 365 Management API: ServiceHealth.Read

Gets the historical service status of the Office 365 Services of the last 7 days from the Office 365 Management API

## SYNTAX 

```powershell
Get-PnPOffice365HistoricalServiceStatus [-Workload <Office365Workload>]
                                        [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPOffice365HistoricalServiceStatus
```

Retrieves the historical service status of all Office 365 services

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPOffice365HistoricalServiceStatus -Workload SharePoint
```

Retrieves the historical service status of SharePoint Online

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
Allows retrieval of the historical service status of only one particular service. If not provided, the historical service status of all services will be returned.

```yaml
Type: Office365Workload
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)