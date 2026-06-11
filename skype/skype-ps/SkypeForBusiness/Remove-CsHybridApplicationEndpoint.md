---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/remove-cshybridapplicationendpoint
schema: 2.0.0
title: Remove-CsHybridApplicationEndpoint
---

# Remove-CsHybridApplicationEndpoint

## SYNOPSIS
Removes the specified hybrid application endpoint.

This cmdlet was introduced in the July 2017 cumulative update for the Lync Server 2013 and May 2017 cumulative update for Skype Business Server 2015.

## SYNTAX

```
Remove-CsHybridApplicationEndpoint [-Identity] <UserIdParameter> [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet removes an existing hybrid application endpoint user object in Active Directory Domain Services. A hybrid application endpoint is an Active Directory user object that enables a trusted application endpoint like bots in hybrid environments.

## EXAMPLES

### Example 1
```
PS C:\> Remove-CsHybridApplicationEndpoint -Identity "CN={4f6c99fe-7999-4088-ac4d-e88e0b3d3820},OU=Redmond,DC=litwareinc,DC=com"
```

This example removes the specified hybrid application endpoint including the Active Directory user object.

## PARAMETERS

### -Identity

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The ApplicationId for the endpoint that is being deleted.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Shows what would happen if the cmdlet runs. The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsHybridApplicationEndpoint](https://learn.microsoft.com/powershell/module/skypeforbusiness/new-cshybridapplicationendpoint?view=skype-ps)

[Get-CsHybridApplicationEndpoint](https://learn.microsoft.com/powershell/module/skypeforbusiness/get-cshybridapplicationendpoint?view=skype-ps)

[Set-CsHybridApplicationEndpoint](https://learn.microsoft.com/powershell/module/skypeforbusiness/set-cshybridapplicationendpoint?view=skype-ps)
