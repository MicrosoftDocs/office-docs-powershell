---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/set-cshybridapplicationendpoint
schema: 2.0.0
title: Set-CsHybridApplicationEndpoint
---

# Set-CsHybridApplicationEndpoint

## SYNOPSIS
Modifies Skype for Business Server properties for an existing hybrid application endpoint.

This cmdlet was introduced in the July 2017 cumulative update for the Lync Server 2013 and May 2017 cumulative update for Skype Business Server 2015.

## SYNTAX
```
Set-CsHybridApplicationEndpoint [-Identity] <HybridApplicationEndpointIdParameter> [-DisplayName <String>] [-LineUri <String>] [-DomainController <Fqdn>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The `Set-CsHybridApplicationEndpoint` cmdlet enables you to modify the Skype for Business Server related hybrid application endpoint attributes that are stored in Active Directory Domain Services. For example, you can modify an endpoint's line URI number; or modify an endpoint's display name.

## EXAMPLES

### Example 1
```
PS C:\> Set-CsHybridApplicationEndpoint -Identity "CN={4f6c99fe-7999-4088-ac4d-e88e0b3d3820},OU=Redmond,DC=litwareinc,DC=com" -DisplayName HybridAppEndpoint1 -LineURI tel:+14255550100
```

This example modify the DisplayName and LineURI attributes for the specified hybrid application endpoint.

## PARAMETERS

### -DisplayName

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Friendly name for the application endpoint that is being modified.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to connect to the specified domain controller in order to retrieve user information. To connect to a particular domain controller, include the DomainController parameter followed by the fully qualified domain name (FQDN) (for example, atl-cs-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

The ApplicationId or Client Id for which the endpoint that is being modified.

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

### -LineUri

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Valid phone number for the application endpoint that is being modified. (Not currently supported through BOT framework)

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Returns an object representing the item with which you are working. By default, this cmdlet does not generate any output.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
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

[Remove-CsHybridApplicationEndpoint](https://learn.microsoft.com/powershell/module/skypeforbusiness/remove-cshybridapplicationendpoint?view=skype-ps)
