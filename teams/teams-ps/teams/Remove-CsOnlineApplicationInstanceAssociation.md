---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
online version: https://learn.microsoft.com/powershell/module/teams/remove-csonlineapplicationinstanceassociation
applicable: Microsoft Teams
title: Remove-CsOnlineApplicationInstanceAssociation
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer: williamlooney
---

# Remove-CsOnlineApplicationInstanceAssociation

## SYNOPSIS
Use the Remove-CsOnlineApplicationInstanceAssociation cmdlet to remove the association between an application instance and the associated application configuration.

## SYNTAX

```
Remove-CsOnlineApplicationInstanceAssociation -Identities <String[]> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Use the Remove-CsOnlineApplicationInstanceAssociation cmdlet to remove the association between an application instance and the associated application configuration.

This is useful when you want to associate this application instance with another application configuration for handling incoming calls.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Remove-CsOnlineApplicationInstanceAssociation -Identities "f7a821dc-2d69-5ae8-8525-bcb4a4556093"
```

This example removes the configuration association for the application instance that has the identity of "f7a821dc-2d69-5ae8-8525-bcb4a4556093".

## PARAMETERS

### -Identities
The identities for the application instances whose configuration associations are to be removed.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: True
Position: 0
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases:
applicable: Microsoft Teams

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### System.String[]
The Remove-CsOnlineApplicationInstanceAssociation cmdlet accepts a string array as the Identities parameter.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.AssociationOperationOutput

## NOTES

## RELATED LINKS

[Get-CsOnlineApplicationInstanceAssociation](Get-CsOnlineApplicationInstanceAssociation.md)

[Get-CsOnlineApplicationInstanceAssociationStatus](Get-CsOnlineApplicationInstanceAssociationStatus.md)

[New-CsOnlineApplicationInstanceAssociation](New-CsOnlineApplicationInstanceAssociation.md)
