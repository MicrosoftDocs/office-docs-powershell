---
applicable: SharePoint Online
title: Add-SPOSiteDesignTask
schema: 2.0.0
---

# Add-SPOSiteDesignTask

## SYNOPSIS

Applies a published site design with a large number of site script actions to a specified site collection target. This allows a site design to be applied to an existing site collection. The supported site templates you can apply a site design to include: “modern” team site (with O365 group), “modern” team site (without an O365 group); communication site; classic team site; and classic publishing site. 

## SYNTAX

```powershell
Add-SPOSiteDesignTask
  -SiteDesignId <guid>
  -WebUrl <string>
  [<CommonParameters>]
```

## DESCRIPTION

Applies a published site design with a large number of site script actions to a specified site collection target. This allows a site design to be applied to an existing site collection. 

This command is intended to replace Invoke-SPOSiteDesign and is useful when you need to apply a large number of actions or multiple site scripts.

> [!NOTE]
> This command only creates the request. To check on the job status or to view details of the scheduled run, use the commands in the related section below.

## EXAMPLES

### Example 1

This example applies a site design that includes two site scripts - totaling over 30 site script actions. Executing the commands will schedule the site design to be queued and run against the designated site collection.

```powershell
Add-SPOSiteDesignTask -Identity 501z8c32-4147-44d4-8607-26c2f67cae82 -WebUrl "https://contoso.sharepoint.com/sites/projectawesome”
```

## PARAMETERS

### -SiteDesignId
The ID of the site design to apply.

```yaml
Type: SPOSiteDesignPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: True 
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False  
```

### -WebUrl
The URL of the site collection where the site design will be applied.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: True 
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False  
```
## RELATED COMMANDS

- [Get-SPOSiteDesignTask](Get-SPOSiteDesignTask.md)

- [Get-SPOSiteDesignRun](Get-SPOSiteDesignRun.md)

- [Get-SPOSiteDesignRunStatus](Get-SPOSiteDesignRunStatus.md)

