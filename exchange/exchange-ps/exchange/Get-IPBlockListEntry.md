---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-IPBlockListEntry

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-IPBlockListEntry cmdlet to obtain information about the IP address configuration for the Connection Filter agent for the computer on which the command is run.

!!! Exchange Server 2013

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange Server 2013.

Use the Get-IPBlockListEntry cmdlet to view the IP Block list entries that are used by the Connection Filtering agent on Edge Transport servers.

!!! Exchange Server 2016

This cmdlet is available or effective only on Edge Transport servers in on-premises Exchange.

Use the Get-IPBlockListEntry cmdlet to view the IP Block list entries that are used by the Connection Filtering agent on Edge Transport servers.

## SYNTAX

### Set1
```
Get-IPBlockListEntry [[-Identity] <IPListEntryIdentity>] [-ResultSize <Unlimited>]
 [-Server <ServerIdParameter>] [<CommonParameters>]
```

### Set2
```
Get-IPBlockListEntry -IPAddress <IPAddress> [-ResultSize <Unlimited>] [-Server <ServerIdParameter>]
 [<CommonParameters>]
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
Get-IPBlockListEntry
```

This example returns a list of all IP addresses in the IP Block list.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-IPBlockListEntry
```

This example returns a list of all IP address entries in the IP Block list.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-IPBlockListEntry
```

This example returns a list of all IP address entries in the IP Block list.

### Example 2 -------------------------- (Exchange Server 2010)
```
Get-IPBlockListEntry | where { $_.IsMachineGenerated }
```

This example returns machine-generated entries in the IP Block list that are inserted by sender reputation.

### Example 2 -------------------------- (Exchange Server 2013)
```
Get-IPBlockListEntry | where {$_.IsMachineGenerated}
```

This example returns machine-generated entries in the IP Block list that are inserted by sender reputation.

### Example 2 -------------------------- (Exchange Server 2016)
```
Get-IPBlockListEntry | where {$_.IsMachineGenerated}
```

This example returns machine-generated entries in the IP Block list that are inserted by sender reputation.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies a configuration number to view a specific IP Block list entry. When you add an IP address to the IP Block list, the Identity parameter is automatically incremented.



!!! Exchange Server 2013, Exchange Server 2016

The Identity parameter specifies the identity integer value of the IP Block list entry that you want to view. When you add an entry to the IP Block list, the Identity value is automatically assigned.



```yaml
Type: IPListEntryIdentity
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -IPAddress
The IPAddress parameter specifies an IP address to view in the IP Block list entry or entries. For example, if you have an IP Block list entry that specifies a range of IP addresses from 192.168.0.1 through 192.168.0.20, enter any IP address in the IP Block list IP address range to return the IP Block list entry.

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

### -ResultSize
!!! Exchange Server 2010

The ResultSize parameter specifies the maximum number of results to return. If you want to return all entries, use unlimited for the value of this parameter. The default value is 1000.



!!! Exchange Server 2013, Exchange Server 2016

The ResultSize parameter specifies the maximum number of results to return. If you want to return all requests that match the query, use unlimited for the value of this parameter. The default value is 1000.



```yaml
Type: Unlimited
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

The Server parameter specifies a Hub Transport server on which to run this command. If you don't use the Server parameter, the command is run on the local server.You can't use this command to configure other Edge Transport servers remotely.



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

[Online Version](https://technet.microsoft.com/library/efdf2bc1-5571-417e-810a-b690bf5c8044.aspx)

