---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Set-IPAllowListProvider

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-IPAllowListProvider cmdlet to modify the configuration information for a specific IP Allow list provider on a computer that has the Edge Transport server role or the Hub Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange Server 2013.

Use the Set-IPAllowListProvider cmdlet to modify IP Allow list providers that are used by the Connection Filtering agent on Edge Transport servers.

!!! Exchange Server 2016

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Set-IPAllowListProvider cmdlet to modify IP Allow list providers that are used by the Connection Filtering agent on Edge Transport servers.

## SYNTAX

```
Set-IPAllowListProvider [-Identity] <IPAllowListProviderIdParameter> [-AnyMatch <$true | $false>]
 [-BitmaskMatch <IPAddress>] [-Confirm] [-DomainController <Fqdn>] [-Enabled <$true | $false>]
 [-IPAddressesMatch <MultiValuedProperty>] [-LookupDomain <SmtpDomain>] [-Name <String>] [-Priority <Int32>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

The Set-IPAllowListProvider cmdlet modifies existing IP Allow list provider configurations. This configuration is used by the Connection Filter agent. The Connection Filter agent acts on the IP address of the remote server that initiates the SMTP connection to determine what action, if any, to take on an incoming message.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features - Edge Transport" entry in the Anti-spam and anti-malware permissions topic.

!!! Exchange Server 2016

On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-IPAllowListProvider -Identity Contoso.com -AnyMatch $true
```

This example configures the Connection Filter agent to allow an IP address if any IP address status codes are returned by the IP Allow list provider Contoso.com.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-IPAllowListProvider Contoso.com -AnyMatch $true
```

This example configures the IP Allow list provider named Contoso.com to allow connections from an IP address if any IP address status codes are returned.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-IPAllowListProvider Contoso.com -AnyMatch $true
```

This example configures the IP Allow list provider named Contoso.com to allow connections from an IP address if any IP address status codes are returned.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-IPAllowListProvider -Identity Contoso.com -Priority 1
```

This example sets the priority of the existing IP Allow list provider Contoso.com to 1.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-IPAllowListProvider Contoso.com -Priority 1
```

This example sets the priority to 1 for the existing IP Allow list provider named Contoso.com.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-IPAllowListProvider Contoso.com -Priority 1
```

This example sets the priority to 1 for the existing IP Allow list provider named Contoso.com.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies thename or GUID of the IP Allow list provider.



!!! Exchange Server 2013, Exchange Server 2016

The Identity parameter specifies the IP Allow list provider that you want to modify. You can use any value that uniquely identifies the IP Allow list provider. For example:

- Name

- Distinguished name (DN)

- GUID



```yaml
Type: IPAllowListProviderIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AnyMatch
!!! Exchange Server 2010

The AnyMatch parameter specifies whether the Connection Filter agent treats any IP address status code returned by the IP Allow list provider service as a match. Valid input for the AnyMatch parameter is $true or $false. The default setting is $false. When the AnyMatch parameter is set to $true, the Connection Filter agent treats any IP address status code returned by the IP Allow list provider service as a match.



!!! Exchange Server 2013, Exchange Server 2016

The AnyMatch parameter specifies whether any response by the allow list provider is treated as a match. Valid input for this parameter is $true or $false. The default value is $false. When this parameter is set to $true, and connection filtering sends the IP address of the connecting SMTP server to the allow list provider, any response code returned by the allow list provider causes connection filtering to allow messages from that source.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BitmaskMatch
!!! Exchange Server 2010

The BitmaskMatch parameter specifies the IP address status code bit mask. When you configure an IP address for the BitmaskMatch parameter, the Connection Filter agent acts only on messages that match the IP address status code returned by the IP Allow list provider service.



!!! Exchange Server 2013, Exchange Server 2016

The BitmaskMatch parameter specifies the bit mask status code that's returned by the allow list provider. Use this parameter if the allow list provider returns bitmask responses. Valid input for this parameter is a single IP address in the format 127.0.0.1.



```yaml
Type: IPAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
!!! Exchange Server 2010

The Enabled parameter specifies whether the Connection Filter agent queries the IP Allow list provider service according to the priority set for this IP Allow list provider configuration. Valid input for the Enabled parameter is $true or $false. The default setting is $true. When the Enabled parameter is set to $true, the Connection Filter agent queries the IP Allow list provider service according to the priority set for this IP Allow list provider configuration.



!!! Exchange Server 2013, Exchange Server 2016

The Enabled parameter specifies whether the Connection Filtering agent queries the IP Allow list provider according to the priority set for this IP Allow list provider configuration. Valid input for this parameter is $true or $false. The default value is $true. By default, the Connection Filtering agent queries the IP Allow list provider according to the priority set for this IP Allow list provider configuration.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAddressesMatch
!!! Exchange Server 2010

The IPAddressesMatch parameter specifies an IP address status code that the Connection Filter agent uses to compare to the IP address status code returned by the IP Allow list provider service. When you configure IP address responses for the IPAddressesMatch parameter, the Connection Filter agent acts only on messages for which the IP address status code returned by the IP Allow list provider service matches the listed IP address responses.



!!! Exchange Server 2013, Exchange Server 2016

The IPAddressesMatch parameter specifies the IP address status codes that are returned by the allow list provider. Use this parameter if the allow list provider returns IP address or A record responses. Valid input for this parameter one or more IP addresses in the format 127.0.0.1.

To enter multiple values and overwrite any existing entries, use the following syntax: \<value1\>,\<value2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<value1\>","\<value2\>"....

To add or remove one or more values without affecting any existing entries, use the following syntax: @{Add="\<value1\>","\<value2\>"...; Remove="\<value1\>","\<value2\>"...}.



```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LookupDomain
!!! Exchange Server 2010

The LookupDomain parameter specifies the domain name that the Connection Filter agent queries for updated IP Allow list data.



!!! Exchange Server 2013, Exchange Server 2016

The LookupDomain parameter specifies the host name that's required to use the allow list provider. Connection filtering sends the IP address of the connecting SMTP server to the host name value that you specify. An example value is allowlist.spamservice.com. The actual value you need to use is provided by the allow list provider.



```yaml
Type: SmtpDomain
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2010

The Name parameter specifies the name of the IP Allow list provider service. The string value for the Identity parameter doesn't change if you change this value.



!!! Exchange Server 2013, Exchange Server 2016

The Name parameter specifies a descriptive name for the IP Allow list provider.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Priority
!!! Exchange Server 2010

The Priority parameter specifies the order that the Connection Filter agent queries the IP Allow list provider services that you've configured. By default, every time that you add a new IP Allow list provider service, the entry is assigned a priority of N+1, where N is the number of IP Allow list provider services you've configured.

If you set the Priority parameter to a value that's the same as another IP Allow list provider service, the priority of the IP Allow list provider service that you added first is incremented by 1.



!!! Exchange Server 2013, Exchange Server 2016

The Priority parameter specifies the order that the Connection Filtering agent queries the IP Allow list providers that you've configured. By default, every time that you add a new IP Allow list provider, the entry is assigned a priority of N+1, where N is the number of IP Allow list providers you've configured.

If you set the Priority parameter to a value that's the same as another IP Allow list provider, the priority of the IP Allow list provider that you added first is incremented by 1.



```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

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

[Online Version](https://technet.microsoft.com/library/a89b0d3d-028e-44e6-82ed-a457a8129497.aspx)

