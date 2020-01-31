---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpunifiedauditlog
applicable: SharePoint Online
schema: 2.0.0
---

# Get-PnPUnifiedAuditLog

## SYNOPSIS
Gets unified audit logs from the Office 365 Management API. Requires the Azure Active Directory application permission 'ActivityFeed.Read'.

## SYNTAX 

### Logs by date
```powershell
Get-PnPUnifiedAuditLog [-ContentType <AuditContentType>]
                       [-StartTime <DateTime>]
                       [-EndTime <DateTime>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPUnifiedAuditLog -ContentType SharePoint -StartTime (Get-Date).AddDays(-1) -EndTime (Get-Date).AddDays(-2)
```

Retrieves the audit logs of SharePoint happening between the current time yesterday and the current time the day before yesterday

## PARAMETERS

### -ContentType
Content type of logs to be retrieved, should be one of the following: AzureActiveDirectory, Exchange, SharePoint, General, DLP.

```yaml
Type: AuditContentType
Parameter Sets: Logs by date

Required: False
Position: Named
Accept pipeline input: False
```

### -EndTime
End time of logs to be retrieved. Start time and end time must both be specified (or both omitted) and must be less than or equal to 24 hours apart.

```yaml
Type: DateTime
Parameter Sets: Logs by date

Required: False
Position: Named
Accept pipeline input: False
```

### -StartTime
Start time of logs to be retrieved. Start time and end time must both be specified (or both omitted) and must be less than or equal to 24 hours apart, with the start time prior to end time and start time no more than 7 days in the past.

```yaml
Type: DateTime
Parameter Sets: Logs by date

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)