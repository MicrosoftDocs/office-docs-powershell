---
external help file: Microsoft.Exchange.TransportMailControl-Help.xml
online version: https://docs.microsoft.com/powershell/module/exchange/set-ipallowlistprovider
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Set-IPAllowListProvider
schema: 2.0.0
author: chrisda
ms.author: chrisda
ms.reviewer:
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Set-IPAllowListProvider

## SYNOPSIS
This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Set-IPAllowListProvider cmdlet to modify IP Allow list providers that are used by the Connection Filtering agent on Edge Transport servers.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://docs.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-IPAllowListProvider [-Identity] <IPAllowListProviderIdParameter> [-AnyMatch <Boolean>]
 [-BitmaskMatch <IPAddress>] [-Confirm] [-DomainController <Fqdn>] [-Enabled <Boolean>]
 [-IPAddressesMatch <MultiValuedProperty>] [-LookupDomain <SmtpDomain>] [-Name <String>] [-Priority <Int32>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1
```powershell
Set-IPAllowListProvider Contoso.com -AnyMatch $true
```

This example configures the IP Allow list provider named Contoso.com to allow connections from an IP address if any IP address status codes are returned.

### Example 2
```powershell
Set-IPAllowListProvider Contoso.com -Priority 1
```

This example sets the priority to 1 for the existing IP Allow list provider named Contoso.com.

## PARAMETERS

### -Identity
The Identity parameter specifies the IP Allow list provider that you want to modify. You can use any value that uniquely identifies the IP Allow list provider. For example:

- Name

- Distinguished name (DN)

- GUID

```yaml
Type: IPAllowListProviderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AnyMatch
The AnyMatch parameter specifies whether any response by the allow list provider is treated as a match. Valid input for this parameter is $true or $false. The default value is $false. When this parameter is set to $true, and connection filtering sends the IP address of the connecting SMTP server to the allow list provider, any response code returned by the allow list provider causes connection filtering to allow messages from that source.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BitmaskMatch
The BitmaskMatch parameter specifies the bit mask status code that's returned by the allow list provider. Use this parameter if the allow list provider returns bitmask responses. Valid input for this parameter is a single IP address in the format 127.0.0.1.

```yaml
Type: IPAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
The Enabled parameter specifies whether the Connection Filtering agent queries the IP Allow list provider according to the priority set for this IP Allow list provider configuration. Valid input for this parameter is $true or $false. The default value is $true. By default, the Connection Filtering agent queries the IP Allow list provider according to the priority set for this IP Allow list provider configuration.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddressesMatch
The IPAddressesMatch parameter specifies the IP address status codes that are returned by the allow list provider. Use this parameter if the allow list provider returns IP address or A record responses. Valid input for this parameter one or more IP addresses in the format 127.0.0.1.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>,...\<valueN\>. If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>",..."\<valueN\>".

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LookupDomain
The LookupDomain parameter specifies the host name that's required to use the allow list provider. Connection filtering sends the IP address of the connecting SMTP server to the host name value that you specify. An example value is allowlist.spamservice.com. The actual value you need to use is provided by the allow list provider.

```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies a descriptive name for the IP Allow list provider.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
The Priority parameter specifies the order that the Connection Filtering agent queries the IP Allow list providers that you've configured. By default, every time that you add a new IP Allow list provider, the entry is assigned a priority of N+1, where N is the number of IP Allow list providers you've configured.

If you set the Priority parameter to a value that's the same as another IP Allow list provider, the priority of the IP Allow list provider that you added first is incremented by 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
