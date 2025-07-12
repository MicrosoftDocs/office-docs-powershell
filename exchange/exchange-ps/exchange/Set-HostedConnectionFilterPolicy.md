---
external help file: Microsoft.Exchange.TransportMailflow-Help.xml
online version: https://learn.microsoft.com/powershell/module/exchange/set-hostedconnectionfilterpolicy
applicable: Exchange Online, Exchange Online Protection
title: Set-HostedConnectionFilterPolicy
schema: 2.0.0
author: chrisda
ms.author: chrisda
Module Name: exchange
---

# Set-HostedConnectionFilterPolicy

## SYNOPSIS
This cmdlet is available only in the cloud-based service.

Use the Set-HostedConnectionFilterPolicy cmdlet to modify the settings of connection filter policies in your cloud-based organization.

For information about the parameter sets in the Syntax section below, see [Exchange cmdlet syntax](https://learn.microsoft.com/powershell/exchange/exchange-cmdlet-syntax).

## SYNTAX

```
Set-HostedConnectionFilterPolicy [-Identity] <HostedConnectionFilterPolicyIdParameter>
 [-AdminDisplayName <String>]
 [-ConfigurationXmlRaw <String>]
 [-Confirm]
 [-EnableSafeList <Boolean>]
 [-IPAllowList <MultiValuedProperty>]
 [-IPBlockList <MultiValuedProperty>]
 [-MakeDefault]
 [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see [Find the permissions required to run any Exchange cmdlet](https://learn.microsoft.com/powershell/exchange/find-exchange-cmdlet-permissions).

## EXAMPLES

### Example 1
```powershell
Set-HostedConnectionFilterPolicy "Default" -IPAllowList 192.168.1.10,192.168.1.23 -IPBlockList 10.10.10.0/25,172.17.17.0/24
```

This example modifies the connection filter policy named Default with the following settings:

- Messages from 192.168.1.10 and 192.168.1.23 are never identified as spam.
- Messages from 10.10.10.0/25 and 172.17.17.0/24 are always identified as spam.

### Example 2
```powershell
Set-HostedConnectionFilterPolicy "Default" -IPAllowList @{Add="192.168.2.10","192.169.3.0/24","192.168.4.1-192.168.4.5"; Remove="192.168.1.10"}
```

This example modifies the connection filter policy named Default with the following settings:

- The following IP addresses are added to the existing values in the IP allow list: 192.168.2.10, 192.169.3.0/24 and 192.168.4.1-192.168.4.5.
- The IP address 192.168.1.10 is removed from the existing values in the IP allow list.

## PARAMETERS

### -Identity
The Identity parameter specifies the connection filter policy that you want to modify. You can use any value that uniquely identifies the policy. For example:

- Name
- Distinguished name (DN)
- GUID

Typically, you only have one connection filter policy: the default policy named Default.

```yaml
Type: HostedConnectionFilterPolicyIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AdminDisplayName
The AdminDisplayName parameter specifies a description for the policy. If the value contains spaces, enclose the value in quotation marks ("). The maximum length is 255 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfigurationXmlRaw
This parameter is reserved for internal Microsoft use.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: `-Confirm:$false`.
- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnableSafeList
The EnableSafeList parameter enables or disables use of the safe list. The safe list is a dynamic allow list in the Microsoft datacenter that requires no customer configuration. Valid values are:

$true: Use the safe list to skip spam filtering on messages from trusted senders that are identified by various third-party sources that Microsoft subscribes to.

$false: Don't use the safe list. This is the default value.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPAllowList
The IPAllowList parameter specifies IP addresses from which messages are always allowed. Messages from the IP addresses you specify won't be identified as spam, despite any other spam characteristics of the messages. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: You can use an IP address range, for example, 192.168.0.1-192.168.0.254. The maximum number of addresses in the range is 256.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25. Valid subnet mask values are /24 through /32.

You can specify multiple IP addresses of the same type separated by commas. For example, `SingleIP1, SingleIP2,...SingleIPN` or `CIDRIP1,CIDRIP2,...CIDRIPN`. To specify multiple IP addresses of different types at the same time, you need to use the following multivalued property syntax: `@{Add="SingleIP1","IPRange1","CIDRIP1",...}`.

**Note**: IPv6 ranges are not supported.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPBlockList
The IPBlockList parameter specifies IP addresses from which messages are never allowed. Messages from the IP addresses you specify are blocked without any further spam scanning. Valid values are:

- Single IP address: For example, 192.168.1.1.
- IP address range: You can use an IP address range, for example, 192.168.0.1-192.168.0.254. The maximum number of addresses in the range is 256.
- Classless InterDomain Routing (CIDR) IP address range: For example, 192.168.0.1/25. Valid subnet mask values are /24 through /32.

You can specify multiple IP addresses of the same type separated by commas. For example, `SingleIP1, SingleIP2,...SingleIPN` or `CIDRIP1,CIDRIP2,...CIDRIPN`. To specify multiple IP addresses of different types at the same time, you need to use the following multivalued property syntax: `@{Add="SingleIP1","IPRange1","CIDRIP1",...}`.

**Note**: IPv6 ranges are not supported.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MakeDefault
This parameter is reserved for internal Microsoft use.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Online, Exchange Online Protection

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
Applicable: Exchange Online, Exchange Online Protection

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
To see the input types that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

### Output types
To see the return types, which are also known as output types, that this cmdlet accepts, see [Cmdlet Input and Output Types](https://go.microsoft.com/fwlink/p/?linkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS
