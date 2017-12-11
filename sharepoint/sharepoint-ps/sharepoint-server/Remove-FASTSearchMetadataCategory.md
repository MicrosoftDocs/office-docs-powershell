---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Remove-FASTSearchMetadataCategory
---

# Remove-FASTSearchMetadataCategory

## SYNOPSIS
Removes a crawled property category from the installation.

## SYNTAX

### Name
```
Remove-FASTSearchMetadataCategory [-Name] <String> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

### Category
```
Remove-FASTSearchMetadataCategory -Category <Category> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet deletes a crawled property category from your installation.
The cmdlet takes either the name of the category (Name parameter) or a category object (Category parameter).

All crawled properties mapped to this category are also removed.
To avoid deleting crawled properties belonging to a category that you are about to remove, first map all crawled properties that you wish to save to a different property set using the Set-FASTSearchMetadataCrawledProperty cmdlet.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Remove-FASTSearchMetadataCategory -name Sharepoint
```

This example deletes the category named "Sharepoint".
Confirmation of the operation is requested.
All crawled properties mapped to the "SharePoint" category are also removed.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$category = Get-FASTSearchMetadataCategory -name Office
Remove-FASTSearchMetadataCategory -category $category -force
```

This example deletes a crawled property category (stored as $category).
Since Force is specified, confirmation of the operation is not required.

## PARAMETERS

### -Name
The name of the category to delete.

```yaml
Type: String
Parameter Sets: Name
Aliases: CategoryName, N
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Category
A category object to be deleted.

```yaml
Type: Category
Parameter Sets: Category
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm
Activates user prompting to confirm the operation.
If set, prompting is activated.

If Confirm is false (-Confirm $false), confirmation prompting is not used.

In cases where Confirm is not specified, the cmdlet will prompt if the $ConfirmPreference shell variable is equal to or greater than the ConfirmImpact setting of the cmdlet (HIGH).

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Overrides any user prompting settings, so that confirmation of the operation is not required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: FAST Server for SharePoint 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

[Get-FASTSearchMetadataCategory]()

[Set-FASTSearchMetadataCategory]()

[New-FASTSearchMetadataCategory]()

[Set-FASTSearchMetadataCrawledProperty]()

