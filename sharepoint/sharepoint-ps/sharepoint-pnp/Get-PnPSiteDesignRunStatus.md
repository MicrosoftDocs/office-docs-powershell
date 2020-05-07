---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpsitedesignrunstatus
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPSiteDesignRunStatus
---

# Get-PnPSiteDesignRunStatus

## SYNOPSIS
Retrieves and displays a list of all site script actions executed for a specified site design applied to a site.

## SYNTAX 

```powershell
Get-PnPSiteDesignRunStatus -Run <TenantSiteDesignRun>
                           [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
$myrun = Get-PnPSiteDesignRun -WebUrl "https://contoso.sharepoint.com/sites/project-playbook" -SiteDesignId cefd782e-sean-4814-a68a-b33b116c302f
Get-PnPSiteDesignRunStatus -Run $myrun
```

This example gets the run for a specific site design applied to a site and sets it to a variable. This variable is then passed into the command -Run parameter. The result is a display of all the site script actions applied for that site design run, including the script action title and outcome. 

## PARAMETERS

### -Run
The site design run for the desired set of script action details.

```yaml
Type: TenantSiteDesignRun
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)