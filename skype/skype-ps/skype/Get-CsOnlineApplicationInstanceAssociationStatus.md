---
external help file: Microsoft.Rtc.Management.Hosted.dll-help.xml
applicable: Skype for Business Online
title: Get-CsOnlineApplicationInstanceAssociationStatus
schema: 2.0.0
manager: bulenteg
author: tomkau
ms.author: tomkau
ms.reviewer:
---

# Get-CsOnlineApplicationInstanceAssociationStatus

## SYNOPSIS
Use the Get-CsOnlineApplicationInstanceAssociationStatus cmdlet to get the provisioning status for the associations you have setup in your organization.

## SYNTAX

```
Get-CsOnlineApplicationInstanceAssociationStatus -Identity <String> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
Use the Get-CsOnlineApplicationInstanceAssociationStatus cmdlet to get provisioning status for the associations you have setup between online application instances and the application configurations, like auto attendants and call queues.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```powershell
Get-CsOnlineApplicationInstanceAssociationStatus -Identity "f7a821dc-2d69-5ae8-8525-bcb4a4556093"
```

This example gets the provisioning status for the association object of the application instance that has the identity of f7a821dc-2d69-5ae8-8525-bcb4a4556093.

## PARAMETERS

### -Identity
The identity for the application instance whose association provisioning status is to be retrieved.

```yaml
Type: System.String
Parameter Sets: (All)
Aliases:
Applicable: Skype for Business Online

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
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### System.String
The Get-CsOnlineApplicationInstanceAssociationStatus cmdlet accepts a string as the Identity parameter.

## OUTPUTS

### Microsoft.Rtc.Management.Hosted.Online.Models.StatusRecord


## NOTES


## RELATED LINKS

[Get-CsOnlineApplicationInstanceAssociation](Get-CsOnlineApplicationInstanceAssociation.md)

[New-CsOnlineApplicationInstanceAssociation](New-CsOnlineApplicationInstanceAssociation.md)

[Remove-CsOnlineApplicationInstanceAssociation](Remove-CsOnlineApplicationInstanceAssociation.md)
