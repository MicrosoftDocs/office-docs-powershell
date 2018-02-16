---
external help file: 
applicable: FAST Server for SharePoint 2010
schema: 2.0.0
title: Remove-FASTSearchMetadataRankProfile
---

# Remove-FASTSearchMetadataRankProfile

## SYNOPSIS
Removes a rank profile from the Microsoft FAST Search Server 2010 for SharePoint system.

## SYNTAX

### Name
```
Remove-FASTSearchMetadataRankProfile [-Name] <String> [-Confirm] [-Force] [-WhatIf] [<CommonParameters>]
```

### RankProfile
```
Remove-FASTSearchMetadataRankProfile -RankProfile <RankProfile> [-Confirm] [-Force] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes a rank profile from the FAST Search Server 2010 for SharePoint system.

A rank profile controls relevance calculation when searching a full text index.
If a deleted rank profile is specified when searching, then the default rank profile is used.

The default rank profile cannot be deleted.

For permissions and the most current information about FAST Search Server 2010 for SharePoint cmdlets, see the online documentation, (http://go.microsoft.com/fwlink/?LinkId=163227).

## EXAMPLES

### ---------------EXAMPLE 1----------------- (FAST Server for SharePoint 2010)
```
C:\PS>Remove-FASTSearchMetadataRankProfile -Name webcontent
```

This example removes the rank profile "webcontent".

### ---------------EXAMPLE 2----------------- (FAST Server for SharePoint 2010)
```
C:\PS>$rankprofile = Get-FASTSearchMetadataRankProfile -Name newrankprofile
Remove-FASTSearchMetadataRankProfile -Force -RankProfile $rankprofile
```

This example deletes the rank profile object which represents the rank profile named "newrankprofile".

No confirmation is required, since the Force parameter is specified.

## PARAMETERS

### -Name
The name of the rank profile to remove.

```yaml
Type: String
Parameter Sets: Name
Aliases: RankProfileName, N
Applicable: FAST Server for SharePoint 2010

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -RankProfile
An object representing the rank profile to remove.

```yaml
Type: RankProfile
Parameter Sets: RankProfile
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

In cases where Confirm is not specified, the cmdlet will prompt if the $ConfirmPreference shell variable is greater than or equal to the ConfirmImpact setting of the cmdlet (HIGH).

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

[New-FASTSearchMetadataRankProfile](New-FASTSearchMetadataRankProfile.md)

[Set-FASTSearchMetadataRankProfile](Set-FASTSearchMetadataRankProfile.md)

[Get-FASTSearchMetadataRankProfile](Get-FASTSearchMetadataRankProfile.md)

