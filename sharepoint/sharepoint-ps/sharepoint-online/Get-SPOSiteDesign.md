---
external help file: 
applicable: SharePoint Online
title: Get-SPOSiteDesign
schema: 2.0.0
---

# Get-SPOSiteDesign

## SYNOPSIS

Gets details about site designs that are on the SharePoint tenant. You can specify an ID of a specific site design to retrieve. If there are no parameters listed, details about all site designs are listed.

## SYNTAX

```powershell
Get-SPOSiteDesign
  [[-Identity] <SPOSiteDesignPipeBind>]
  [<CommonParameters>]
```

## EXAMPLES

### Example 1 

This example and sample response show how to get site design details.

```powershell
PS C:\> Get-SPOSiteDesign 44252d09-62c4-4913-9eb0-a2a8b8d7f863

Id                  : 44252d09-62c4-4913-9eb0-a2a8b8d7f863
Title               : Contoso - Team Project
WebTemplate         : 64
SiteScriptIds       : {1306913c-8463-42ca-bd63-efad0fcdbba4}
Description         : Use this design to apply Contoso theme and create
                      custom lists and add to nav
```


## PARAMETERS

### -Identity
The ID of the site design to retrieve.

```yaml
Type: SPOSiteDesignPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False 
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False 
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS