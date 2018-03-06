---
external help file: 
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


## PARAMETERS

|Parameter     | Description  |
|--------------|--------------|
| [-Identity]  | The ID of the site design to remove. |

### [-Identity]
The ID of the site design to remove.

```yaml
Type: 
Parameter Sets: 
Aliases: 
Applicable: SharePoint Online
Required: 
Position: 
Default value: 
Accept pipeline input: 
Accept wildcard characters: 
```

## EXAMPLES

### Example 1

The following example shows how to remove a site design. 

```powershell
C:\> Remove-SPOSiteDesign 21209d88-38de-4844-9823-f1f600a1179a
```
