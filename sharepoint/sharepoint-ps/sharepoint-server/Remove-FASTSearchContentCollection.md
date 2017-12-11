---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Remove-FASTSearchContentCollection
---

# Remove-FASTSearchContentCollection

## SYNOPSIS
Deletes a Microsoft FAST Search Server 2010 for SharePoint content collection.

## SYNTAX

```
Remove-FASTSearchContentCollection [-Name] <String> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet deletes a FAST Search Server 2010 for SharePoint content collection.
All items in the collection will be deleted.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Remove-FASTSearchContentCollection -Name newscollection -Force
```

This example removes the content collection named "newscollection" without asking the user to confirm the operation.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Remove-FASTSearchContentCollection -Name newscollection -WhatIf
```

This example describes what would happen if you executed the Remove-FASTSearchContentCollection cmdlet.

## PARAMETERS

### -Name
The name of the content collection to delete.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Activates user prompting to confirm the operation.
If set, prompting is activated.

If Confirm is false (-Confirm:$false), you will not be prompted.

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
Overrides any user prompting settings so the user is not asked to confirm the operation.

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

[Clear-FASTSearchContentCollection]()

[New-FASTSearchContentCollection]()

[Get-FASTSearchContentCollection]()

