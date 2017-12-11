---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Remove-FASTSearchMetadataFullTextIndex
---

# Remove-FASTSearchMetadataFullTextIndex

## SYNOPSIS
Removes a full text index from the Microsoft FAST Search Server 2010 for SharePoint system.

## SYNTAX

### FullTextIndex
```
Remove-FASTSearchMetadataFullTextIndex -FullTextIndex <FullTextIndex> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

### Name
```
Remove-FASTSearchMetadataFullTextIndex -Name <String> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a full text index.
The content of the index is removed and is no longer searchable.
The managed properties mapped to the full text index are still available and can be mapped to other or new full text indexes.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Remove-FASTSearchMetadataFullTextIndex -name secondarycontent
```

This example removes the full text index named "secondarycontent" from the FAST Search Server 2010 for SharePoint system.
The cmdlet asks for confirmation as long as neither the Force parameter is used or the $ConfirmPreference environment is set to a higher value than HIGH.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$index=Get-FASTSearchMetadataFullTextIndex -name secondarycontent
Remove-FASTSearchMetadataFullTextIndex -FullTextIndex $index -force
```

This example removes the full text index represented by the $index variable.
Since the Force parameter is specified, confirmation of the index removal is not used.

## PARAMETERS

### -FullTextIndex
A full text index object representing the full text index to remove.

```yaml
Type: FullTextIndex
Parameter Sets: FullTextIndex
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Name
The name of the full text index to remove.

```yaml
Type: String
Parameter Sets: Name
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
If Confirm is false (-Confirm:$false), confirmation prompting is not used.

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

[New-FASTSearchMetadataFullTextIndex]()

[Set-FASTSearchMetadataFullTextIndex]()

[Get-FASTSearchMetadataFullTextIndex]()

