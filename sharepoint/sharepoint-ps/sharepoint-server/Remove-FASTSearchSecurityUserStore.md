---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Remove-FASTSearchSecurityUserStore
---

# Remove-FASTSearchSecurityUserStore

## SYNOPSIS
Removes a user store.

## SYNTAX

```
Remove-FASTSearchSecurityUserStore [-Identity] <String> [[-SecurityUserStoreToRemove] <SecurityUserStore>]
 [-Confirm] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet deletes a security user store.
The user store may be a Lotus Notes, Microsoft, or claims user store.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Remove-FASTSearchSecurityUserStore -Identity wn1
```

This example deletes the "wn1" user store.
A prompt is displayed to confirm the request.

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Get-FASTSearchSecurityLotusNotesUserStore ln2 | remove-FASTSearchSecurityUserStore
```

This example deletes the user store specified by a piped SecurityUserStoreToRemove instance.
A prompt is displayed to confirm the request.

## PARAMETERS

### -Identity
The identity of the user store to remove.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -SecurityUserStoreToRemove
A MicrosoftUserStore, LotusNotesUserStore, or ClaimsUserStore instance whose identity is used to remove the user store.

```yaml
Type: SecurityUserStore
Parameter Sets: (All)
Aliases: 
Applicable: FAST Server for SharePoint 2010

Required: False
Position: 9999
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Activates user prompting to confirm the operation.
If set, prompting is activated and you must confirm the remove request.

To suppress user prompting, set the confirm parameter to false.
For example: -confirm:$false

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

[Get-FASTSearchSecurityUserStore](Get-FASTSearchSecurityUserStore.md)

