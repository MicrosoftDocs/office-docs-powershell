---
external help file: 
applicable: SharePoint Online
title: Invoke-SPOSiteDesign
schema: 2.0.0
---

# Invoke-SPOSiteDesign

## SYNOPSIS

Applies a published site design to a specified site collection target. This allows a site design to be applied to an existing site collection.

## SYNTAX

```powershell
Invoke-SPOSiteDesign
  [-Identity]
  -WebUrl <string>
  [<CommonParameters>]
```

## DESCRIPTION

Applies a published site design to a specified site collection target. This allows a site design to be applied to an existing site collection.

## EXAMPLES

### Example 1

This example applies a site design whose script creates two lists, formats several of the columns, adds the lists to the site navigation, and then joins the site to an existing hub site.

```powershell
C:\> Invoke-SPOSiteDesign -Identity 501z8c32-4147-44d4-8607-26c2f67cae82 -WebUrl "https://contoso.sharepoint.com/sites/projectgo”

Title                                             Outcome
----------------------------------------------    -------
Create or update list Project Activities          Success
Update list description                           Success
Create column Project Status                      Success
Create column Effort (days)                       Success
Set custom formatter for field Project Status     Success
Set custom formatter for field Effort (days)      Success
Create or update list Project Collateral          Success
Create column Due Date                            Success
Set custom formatter for field Due Date           Success
Add Project Activities to left nav                Success
Add Project Collateral to left nav                Success
Add to Hub Site                                   Success
```

## PARAMETERS

### -Identity
The ID of the site design to apply.

```yaml
Type: 
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Online
Required: False 
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

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS