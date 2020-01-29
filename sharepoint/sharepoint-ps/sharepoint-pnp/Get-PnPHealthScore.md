---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnphealthscore
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
schema: 2.0.0
---

# Get-PnPHealthScore

## SYNOPSIS
Retrieves the healthscore value.

## DESCRIPTION
Retrieves the current X-SharePointHealthScore value of the server, or CPU, on which your SharePoint instance runs. X-SharePointHealthScore is a value between 0 and 10, where 0 indicates the server is idle and 10 indicates the server is very busy. For more information visit https://docs.microsoft.com/office365/enterprise/diagnosing-performance-issues-with-sharepoint-online and https://docs.microsoft.com/openspecs/sharepoint_protocols/ms-wsshp/c60ddeb6-4113-4a73-9e97-26b5c3907d33.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPHealthScore
```

This will retrieve the current health score of the server.

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPHealthScore -Url https://contoso.sharepoint.com
```

This will retrieve the current health score for the url https://contoso.sharepoint.com.

## OUTPUTS

### System.Int32

Returns a int value representing the current health score value of the server.

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)
