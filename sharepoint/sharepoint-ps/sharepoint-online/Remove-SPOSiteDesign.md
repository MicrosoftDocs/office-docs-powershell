---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Remove-SPOSiteDesign
schema: 2.0.0
---

# Remove-SPOSiteDesign

## SYNOPSIS

Removes a site design. It no longer appears in the UI for creating a new site.

## SYNTAX

```powershell
  Remove-SPOSiteDesign
  [-Identity] <SPOSiteDesignPipeBind>
  [<CommonParameters>]
```

## DESCRIPTION

Removes a site design. It no longer appears in the UI for creating a new site.

## EXAMPLES

### Example 1

This example shows how to remove a site design. 

```powershell
Remove-SPOSiteDesign 21209d88-38de-4844-9823-f1f600a1179a
```


## PARAMETERS

### -Identity
The ID of the site design to remove.

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

