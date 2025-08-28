---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
author: chrisda
external help file: Microsoft.Exchange.MediaAndDevices-Help.xml
Locale: en-US
Module Name: ExchangePowerShell
ms.author: chrisda
online version: https://learn.microsoft.com/powershell/module/exchangepowershell/new-umdialplan
schema: 2.0.0
title: New-UMDialPlan
---

# New-UMDialPlan

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the New-UMDialPlan cmdlet to create a Unified Messaging (UM) dial plan to establish a link between UM IP gateways, UM hunt groups, and Mailbox servers to enable communication between Unified Messaging components.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
New-UMDialPlan [-Name] <String> -CountryOrRegionCode <String> -NumberOfDigitsInExtension <Int32>
 [-AccessTelephoneNumbers <MultiValuedProperty>]
 [-Confirm]
 [-DefaultLanguage <UMLanguage>]
 [-DomainController <Fqdn>]
 [-FaxEnabled <Boolean>]
 [-GenerateUMMailboxPolicy <Boolean>]
 [-URIType <UMURIType>]
 [-VoIPSecurity <UMVoIPSecurityType>]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The New-UMDialPlan cmdlet creates a UM dial plan in Active Directory. A UM dial plan object has an organization-wide scope and contains all configuration information related to a telephony dial plan. A UM dial plan is a required component for establishing Unified Messaging communications with Microsoft Exchange. When you create a UM dial plan, an understanding of telephony configurations and the implications of adding to or modifying a UM configuration is required.

After the new UM dial plan is created, a UM IP gateway and a Mailbox server must be associated with the UM dial plan to enable Unified Messaging operations.

After this task is completed, a new UM dial plan is created.

You need to be assigned permissions before you can run this cmdlet. Although this article lists all parameters for the cmdlet, you might not have access to some parameters if they aren't included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
New-UMDialPlan -Name MyUMDialPlan -NumberOfDigitsInExtension 4
```

This example creates the UM dial plan MyUMDialPlan that uses four-digit extension numbers.

### Example 2
```powershell
New-UMDialPlan -Name MyUMDialPlan -URIType SipName -NumberOfDigitsInExtension 5
```

This example creates the UM dial plan MyUMDialPlan that uses five-digit extension numbers that support SIP URIs.

### Example 3
```powershell
New-UMDialPlan -Name MyUMDialPlan -URIType E164 -NumberOfDigitsInExtension 5 -VoIPSecurity Unsecured
```

This example creates the unsecured UM dial plan MyUMDialPlan that supports E.164 numbers and that uses five-digit extension numbers.

## PARAMETERS

### -Name

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Name parameter specifies the display name of the UM dial plan. This description is presented to the administrator when a user is enabled for Unified Messaging. The UM dial plan name field can contain as many as 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryOrRegionCode

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The CountryOrRegionCode parameter specifies the country or region code that precedes a telephone number used to place calls from other countries or regions to the country or region in which the UM dial plan is located. For example, 1 is the code used for North America and 44 is the code used for the United Kingdom.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfDigitsInExtension

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The NumberOfDigitsInExtension parameter specifies the fixed number of digits in an extension number. The range for this parameter is from 1 through 20 digits.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessTelephoneNumbers

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The AccessTelephoneNumbers parameter specifies the telephone number or numbers used for subscriber access. These numbers are sometimes referred to as pilot or pilot ID numbers. The telephone number is limited to 32 characters.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -DefaultLanguage

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The DefaultLanguage parameter specifies the default language of the system. This default language is selected from the list of available languages. If there are no other UM language packs installed, the default value is en-US.

```yaml
Type: UMLanguage
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

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

### -FaxEnabled

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The FaxEnabled parameter specifies whether the Mailbox servers associated with the dial plan answer and process incoming fax calls. The default is $true.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateUMMailboxPolicy

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The GenerateUMMailboxPolicy parameter specifies whether a default UM mailbox policy is created when the UM dial plan is created. The default setting is to create a UM mailbox when the UM dial plan is created.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -URIType

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The URIType parameter specifies the URI type to be sent and received with SIP messages from the Private Branch eXchange (PBX).

```yaml
Type: UMURIType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoIPSecurity

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The VoIPSecurity parameter specifies whether the signaling channel is encrypted using mutual Transport Layer Security (TLS). The default setting is Unsecured.

```yaml
Type: UMVoIPSecurityType
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

### Input types
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
