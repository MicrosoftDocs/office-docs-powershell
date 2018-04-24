---
external help file: Microsoft.Exchange.MediaAndDevices-Help.xmll
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
title: New-UMDialPlan
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchonline-ps"
---

# New-UMDialPlan

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the New-UMDialplan cmdlet to create a Unified Messaging (UM) dial plan to establish a link between UM IP gateways, UM hunt groups, and Mailbox servers to enable communication between Unified Messaging components.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
New-UMDialPlan [-Name] <String> -CountryOrRegionCode <String> -NumberOfDigitsInExtension <Int32>
 [-AccessTelephoneNumbers <MultiValuedProperty>] [-Confirm] [-DefaultLanguage <UMLanguage>]
 [-DefaultOutboundCallingLineId <String>] [-DomainController <Fqdn>] [-FaxEnabled <$true | $false>]
 [-GenerateUMMailboxPolicy <$true | $false>]
 [-GlobalCallRoutingScheme <None | E164 | GatewayGuid | Reserved1 | Reserved2 | Reserved3>]
 [-SipResourceIdentifierRequired <$true | $false>]
 [-SubscriberType <Enterprise | Consumer>] [-URIType <TelExtn | E164 | SipName>]
 [-VoIPSecurity <SIPSecured | Unsecured | Secured>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The New-UMDialplan cmdlet creates a UM dial plan in Active Directory. A UM dial plan object has an organization-wide scope and contains all configuration information related to a telephony dial plan. A UM dial plan is a required component for establishing Unified Messaging communications with Microsoft Exchange. When you create a UM dial plan, an understanding of telephony configurations and the implications of adding to or modifying a UM configuration is required.

After the new UM dial plan is created, a UM IP gateway and a Mailbox server must be associated with the UM dial plan to enable Unified Messaging operations.

After this task is completed, a new UM dial plan is created.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
New-UMDialplan -Name MyUMDialPlan -NumberOfDigitsInExtension 4
```

This example creates the UM dial plan MyUMDialPlan that uses four-digit extension numbers.

### -------------------------- Example 2 --------------------------
```
New-UMDialplan -Name MyUMDialPlan -URIType SipName -NumberOfDigitsInExtension 5
```

This example creates the UM dial plan MyUMDialPlan that uses five-digit extension numbers that support SIP URIs.

### -------------------------- Example 3 --------------------------
```
New-UMDialplan -Name MyUMDialPlan -URIType E164 -NumberOfDigitsInExtension 5 -VoIPSecurity Unsecured
```

This example creates the unsecured UM dial plan MyUMDialPlan that supports E.164 numbers and that uses five-digit extension numbers.

## PARAMETERS

### -CountryOrRegionCode
The CountryOrRegionCode parameter specifies the country or region code that precedes a telephone number used to place calls from other countries or regions to the country or region in which the UM dial plan is located. For example, 1 is the code used for North America and 44 is the code used for the United Kingdom.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the display name of the UM dial plan. This description is presented to the administrator when a user is enabled for Unified Messaging. The UM dial plan name field can contain as many as 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberOfDigitsInExtension
The NumberOfDigitsInExtension parameter specifies the fixed number of digits in an extension number. The range for this parameter is from 1 through 20 digits.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessTelephoneNumbers
The AccessTelephoneNumbers parameter specifies the telephone number or numbers used for subscriber access. These numbers are sometimes referred to as pilot or pilot ID numbers. The telephone number is limited to 32 characters.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultLanguage
The DefaultLanguage parameter specifies the default language of the system. This default language is selected from the list of available languages. If there are no other UM language packs installed, the default value is en-US.

```yaml
Type: UMLanguage
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultOutboundCallingLineId
The DefaultOutboundCallingLineId parameter specifies the phone number that a Unified Messaging server would use as the calling line ID when placing an outbound call. By default, this is set to $null and only the extension number of the UM-enabled user that places the outbound call is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FaxEnabled
The FaxEnabled parameter specifies whether the Mailbox servers associated with the dial plan answer and process incoming fax calls. The default is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GenerateUMMailboxPolicy
The GenerateUMMailboxPolicy parameter specifies whether a default UM mailbox policy is created when the UM dial plan is created. The default setting is to create a UM mailbox when the UM dial plan is created.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GlobalCallRoutingScheme
The GlobalCallRoutingScheme parameter specifies whether UM-enabled users and auto attendant numbers should be included in the global routing database. If the setting is E.164, the numbers are provisioned in the global routing database.

```yaml
Type: None | E164 | GatewayGuid | Reserved1 | Reserved2 | Reserved3
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipResourceIdentifierRequired
The SipResourceIdentifierRequired parameter specifies whether the SIP resource identifier is required to be specified when mailboxes are UM-enabled and associated with the dial plan. The default is $false but it can only be set to $true if the URI type of the dial plan is E.164.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SubscriberType
The SubscriberType parameter specifies either Consumer or Enterprise as the type of dial plan. Enterprise dial plans are most likely to be used in a single organization. Consumer dial plans are used in hosted environments and can represent dial plans that may belong to different tenants.

```yaml
Type: Enterprise | Consumer
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -URIType
The URIType parameter specifies the URI type to be sent and received with SIP messages from the Private Branch eXchange (PBX).

```yaml
Type: TelExtn | E164 | SipName
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoIPSecurity
This parameter is available only in on-premises Exchange.

The VoIPSecurity parameter specifies whether the signaling channel is encrypted using mutual Transport Layer Security (TLS). The default setting is Unsecured.

```yaml
Type: SIPSecured | Unsecured | Secured
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/21b8a099-92d0-49cf-b492-a052e0f23135.aspx)
