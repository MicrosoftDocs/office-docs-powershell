---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Remove-OabVirtualDirectory

## SYNOPSIS
!!! Exchange Server 2010

Use the Remove-OABVirtualDirectory cmdlet to remove a server from the offline address book (OAB) distribution points list.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Remove-OabVirtualDirectory cmdlet to remove a server from the offline address book (OAB) distribution points list.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Remove-OabVirtualDirectory cmdlet to remove offline address book (OAB) virtual directories from Internet Information Services (IIS) on Exchange servers.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Remove-OabVirtualDirectory [-Identity] <VirtualDirectoryIdParameter> [-Confirm] [-DomainController <Fqdn>]
 [-Force] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

Some situations require the removal of an OAB virtual directory. For example, to uninstall a Client Access server that contains an OAB distribution points list, you must remove the OAB virtual directory and then re-create it on another Client Access server.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Offline address books" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

Some situations require the removal of an OAB virtual directory. For example, to uninstall a Client Access server that contains an OAB distribution points list, you must remove the OAB virtual directory and then re-create it on another Client Access server.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Offline address books" entry in the Email address and address book permissions topic.

!!! Exchange Server 2016

Some situations require the removal of an OAB virtual directory. For example, to uninstall an Exchange server that contains an OAB distribution points list, you need to remove the OAB virtual directory and then re-create it on another server.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Remove-OABVirtualDirectory -Identity "OAB (Default Web Site)"
```

This example removes the default OAB virtual directory from the local server.

### Example 1 -------------------------- (Exchange Server 2013)
```
Remove-OabVirtualDirectory -Identity "OAB (Default Web Site)"
```

This example removes the default OAB virtual directory from the local server.

### Example 1 -------------------------- (Exchange Server 2016)
```
Remove-OabVirtualDirectory -Identity "OAB (Default Web Site)"
```

This example removes the default OAB virtual directory from the local server.

### Example 2 -------------------------- (Exchange Server 2010)
```
Remove-OABVirtualDirectory -Identity "Server1\OAB (Default Web Site)"
```

This example removes the default OAB virtual directory from Server1.

### Example 2 -------------------------- (Exchange Server 2013)
```
Remove-OabVirtualDirectory -Identity "Server1\OAB (Default Web Site)"
```

This example removes the default OAB virtual directory from Server1.

### Example 2 -------------------------- (Exchange Server 2016)
```
Remove-OabVirtualDirectory -Identity "Server1\OAB (Default Web Site)"
```

This example removes the default OAB virtual directory from Server1.

## PARAMETERS

### -Identity
!!! Exchange Server 2010, Exchange Server 2013

The Identity parameter specifies the GUID, distinguished name (DN), or OAB virtual directory name that represents a specific OAB virtual directory. You can also include the path by using the format Server\\OfflineAddressBookVirtualDirectoryName.

You can omit the parameter label so that only the OAB virtual directory name or GUID is supplied.



!!! Exchange Server 2016

The Identity parameter specifies the OAB virtual directory that you want to remove.

You can use any value that uniquely identifies the virtual directory. For example:

- Name or \<Server\>\\Name

- Distinguished name (DN)

- GUID

The Name value uses the syntax "\<VirtualDirectoryName\> (\<WebsiteName\>)" from the properties of the virtual directory. You can specify the wildcard character (\*) instead of the default website by using the syntax \<VirtualDirectoryName\>\*.



```yaml
Type: VirtualDirectoryIdParameter
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

### -DomainController
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

### -Force
!!! Exchange Server 2010

The Force switch specifies whether to force the command to execute without asking for user confirmation. If set to $true, this parameter forces the command to execute without asking for user confirmation.



!!! Exchange Server 2013

The Force switch specifies whether to suppress warning or confirmation messages. This switch can be used when the task is run programmatically and prompting for administrative input is inappropriate. If the Force switch isn't provided in the command, you're prompted for administrative input. You don't have to specify a value with this parameter.



!!! Exchange Server 2016

The Force switch specifies whether to suppress warning or confirmation messages. You can use this switch to run tasks programmatically where prompting for administrative input is inappropriate. You don't need to specify a value with this switch.



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

[Online Version](https://technet.microsoft.com/library/077d03e7-363d-4ba4-9cfc-5585a73689bc.aspx)

