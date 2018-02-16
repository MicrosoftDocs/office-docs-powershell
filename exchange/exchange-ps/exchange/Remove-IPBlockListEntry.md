---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Remove-IPBlocklistEntry

## SYNOPSIS
!!! Exchange Server 2010

Use the Remove-IPBlockListEntry cmdlet to remove an IP address from the configuration information for the Connection Filter agent on the computer on which the cmdlet is run.

!!! Exchange Server 2013

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange Server 2013.

Use the Remove-IPBlockListEntry cmdlet to remove IP block list entries that are used by the Connection Filtering agent on Edge Transport servers.

!!! Exchange Server 2016

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Remove-IPBlockListEntry cmdlet to remove IP block list entries that are used by the Connection Filtering agent on Edge Transport servers.

## SYNTAX

```
Remove-IPBlocklistEntry [-Identity] <IPListEntryIdentity> [-Confirm] [-Server <ServerIdParameter>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You must specify the Identity parameter for an IP Block list entry when using the Remove-IPBlockListEntry command. The Identity parameter is an integer value automatically assigned when the IP Block list entry is first created. To remove a specific IP address or IP address range from the IP Block list, you can use the output of the Get-IPBlockListEntry command.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features" entry in the Transport Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Anti-spam features - Edge Transport" entry in the Anti-spam and anti-malware permissions topic.

!!! Exchange Server 2016

On Edge Transport servers, you need to be a member of the local Administrators group to run this cmdlet.

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-IPBlockListEntry | Where {$_.IPRange -eq '192.168.0.100'} | Remove-IPBlockListEntry
```

This example removes the IP address 192.168.0.100 from the IP Block list.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-IPBlockListEntry | Where {$_.IPRange -eq '192.168.0.100'} | Remove-IPBlockListEntry
```

This example removes the IP address 192.168.0.100 from the IP Block list.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-IPBlockListEntry | Where {$_.IPRange -eq '192.168.0.100'} | Remove-IPBlockListEntry
```

This example removes the IP address 192.168.0.100 from the IP Block list.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-IPBlockListEntry | Where {$_.IPRange -eq '192.168.0.0/24'} | Remove-IPBlockListEntry
```

This example removes the IP address range 192.168.0.0/24 from the IP Block list.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-IPBlockListEntry | Where {$_.IPRange -eq '192.168.0.0/24'} | Remove-IPBlockListEntry
```

This example removes the IP address range 192.168.0.0/24 from the IP Block list.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-IPBlockListEntry | Where {$_.IPRange -eq '192.168.0.0/24'} | Remove-IPBlockListEntry
```

This example removes the IP address range 192.168.0.0/24 from the IP Block list.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the IP address that you want to remove. When you add an IP address to the IP Block list, the Identity parameter is automatically incremented.



!!! Exchange Server 2013, Exchange Server 2016

The Identity parameter specifies the integer value of the IP Block list entry that you want to remove. When you add an entry to the IP Block list, the Identity value is automatically assigned. To find the Identity value of an IP Block list entry, use the Get-IPBlockListEntry cmdlet.



```yaml
Type: IPListEntryIdentity
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Confirm
!!! Exchange Server 2010, Exchange Server 2013

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



!!! Exchange Server 2016

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

### -Server
!!! Exchange Server 2010

The Server parameter specifies the server on which you run this command. If you don't use the Server parameter, the command is run on the local server.

You can't use this command to configure other Edge Transport servers remotely.



!!! Exchange Server 2013

The Server parameter specifies the Exchange server on which you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use the Server parameter, the command is run on the local server.

You can't use this command to configure other Edge Transport servers remotely.



!!! Exchange Server 2016

The Server parameter specifies the Exchange server where you want to run this command. You can use any value that uniquely identifies the server. For example:

- Name

- FQDN

- Distinguished name (DN)

- Exchange Legacy DN

If you don't use this parameter, the command is run on the local server.

You can't use this command to configure other Edge Transport servers remotely.



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

[Online Version](https://technet.microsoft.com/library/c72aef06-68fd-47ba-a9ac-9984e31d13e4.aspx)

