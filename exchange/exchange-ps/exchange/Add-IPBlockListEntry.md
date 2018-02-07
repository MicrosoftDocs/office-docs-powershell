---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Add-IPBlockListEntry

## SYNOPSIS
!!! Exchange Server 2010

Use the Add-IPBlockListEntry cmdlet to add an IP address or IP address range to the IP Block list configuration information for the Connection Filter agent on a computer that has the Hub Transport server role or Edge Transport server role installed.

!!! Exchange Server 2013

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange Server 2013.

Use the Add-IPBlockListEntry cmdlet to add IP Block list entries to the IP Block list that's used by the Connection Filtering agent on Edge Transport servers.

!!! Exchange Server 2016

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Add-IPBlockListEntry cmdlet to add IP Block list entries to the IP Block list that's used by the Connection Filtering agent on Edge Transport servers.

## SYNTAX

### Set2
```
Add-IPBlockListEntry -IPAddress <IPAddress> [-Comment <String>] [-Confirm] [-ExpirationTime <DateTime>]
 [-Server <ServerIdParameter>] [-WhatIf] [<CommonParameters>]
```

### Set1
```
Add-IPBlockListEntry -IPRange <IPRange> [-Comment <String>] [-Confirm] [-ExpirationTime <DateTime>]
 [-Server <ServerIdParameter>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features - Edge Transport" entry in the Anti-spam and anti-malware permissions topic.

!!! Exchange Server 2016

On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Add-IPBlockListEntry -IPAddress 192.168.0.100
```

This example adds the IP address 192.168.0.100 to the list of blocked IP addresses.

### Example 1 -------------------------- (Exchange Server 2013)
```
Add-IPBlockListEntry -IPAddress 192.168.0.100
```

This example adds the IP address 192.168.0.100 to the list of blocked IP addresses.

### Example 1 -------------------------- (Exchange Server 2016)
```
Add-IPBlockListEntry -IPAddress 192.168.0.100
```

This example adds the IP address 192.168.0.100 to the list of blocked IP addresses.

### Example 2 -------------------------- (Exchange Server 2010)
```
Add-IPBlockListEntry -IPRange 192.168.0.1/24 -ExpirationTime "1/3/2010 23:59"
```

This example adds the IP address range 192.168.0.1/24 to the list of blocked IP addresses and configures the IP Block list entry to expire at 23:59 on January 3, 2010.

### Example 2 -------------------------- (Exchange Server 2013)
```
Add-IPBlockListEntry -IPRange 192.168.0.1/24 -ExpirationTime "1/3/2013 23:59"
```

This example adds the IP address range 192.168.0.1/24 to the list of blocked IP addresses and configures the IP Block list entry to expire at 23:59 on January 3, 2013.

### Example 2 -------------------------- (Exchange Server 2016)
```
Add-IPBlockListEntry -IPRange 192.168.0.1/24 -ExpirationTime "1/3/2013 23:59"
```

This example adds the IP address range 192.168.0.1/24 to the list of blocked IP addresses and configures the IP Block list entry to expire at 23:59 on January 3, 2013.

## PARAMETERS

### -IPAddress
The IPAddress parameter specifies a single IP address to add to the IP Block list, for example, 192.168.0.1.

```yaml
Type: IPAddress
Parameter Sets: Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IPRange
!!! Exchange Server 2010

The IPRange parameter specifies a range of IP addresses to add to the IP Block list. You can use the following formats:

- CIDR IP You can use Classless InterDomain Routing (CIDR), for example, 192.168.0.1/24.

- IP range You can use an IP address range, for example, 192.168.0.1-192.168.0.254.



!!! Exchange Server 2013

The IPRange parameter specifies a range of IP addresses to add to the IP Block list. You can use the following formats:

- CIDR IP192.168.0.1/24

- IP address range192.168.0.1-192.168.0.254.



!!! Exchange Server 2016

The IPRange parameter specifies a range of IP addresses to add to the IP Block list. You can use the following formats:

- CIDR IP:192.168.0.1/24

- IP address range:192.168.0.1-192.168.0.254.



```yaml
Type: IPRange
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Comment
!!! Exchange Server 2010

The Comment parameter specifies administrative notes or reminders about this specific entry. You must enclose the value of the Comment parameter in quotation marks ("), for example, "this is an admin note".



!!! Exchange Server 2013, Exchange Server 2016

The Comment parameter specifies an optional comment. If you specify a value that contains spaces, enclose the value in quotation marks ("), for example: "This is an admin note".



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

### -ExpirationTime
!!! Exchange Server 2010

The ExpirationTime parameter specifies a day and time when the IP Block list entry that you're creating will expire. If you specify a time only, and you don't specify a date, the current day is assumed. When you enter a specific date, use the short date format defined in the Regional Options settings configured on the local computer. For example, if your computer is configured to use the short date format mm/dd/yyyy hh:mm:ss, to set the expiration time at 11:00 January 3, 2010, enter the following information, enclosed in quotation marks ("): "1/3/2010 11:00".



!!! Exchange Server 2013

The ExpirationTime parameter specifies a day and time when the IP Block list entry that you're creating will expire. If you specify a time only, and you don't specify a date, the current day is assumed.

Use the short date format defined in the Regional Options settings for the computer on which the command is run. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 03/01/2010 to specify March 1, 2010. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, you must enclose the argument in quotation marks ("), for example, "10/05/2010 5:00 PM".



!!! Exchange Server 2016

The ExpirationTime parameter specifies a day and time when the IP Block list entry that you're creating will expire. If you specify a time only, and you don't specify a date, the current day is assumed.

Use the short date format that's defined in the Regional Options settings on the computer where you're running the command. For example, if the computer is configured to use the short date format mm/dd/yyyy, enter 09/01/2015 to specify September 1, 2015. You can enter the date only, or you can enter the date and time of day. If you enter the date and time of day, enclose the value in quotation marks ("), for example, "09/01/2015 5:00 PM".



```yaml
Type: DateTime
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Server
!!! Exchange Server 2010

The Server parameter specifies a Hub Transport server on which to run this command. If you don't use the Server parameter, the command is run on the local server.

You can't use this command to configure other Edge Transport servers remotely.



!!! Exchange Server 2013

The Server parameter specifies the Exchange server on which you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use the Server parameter, the command is run on the local server.

You can't use this parameter to configure other Edge Transport servers remotely.



!!! Exchange Server 2016

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

You can't use this parameter to configure other Edge Transport servers remotely.



```yaml
Type: ServerIdParameter
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

[Online Version](https://technet.microsoft.com/library/02ff6f8f-3090-46b9-9e58-131239a75ad3.aspx)

