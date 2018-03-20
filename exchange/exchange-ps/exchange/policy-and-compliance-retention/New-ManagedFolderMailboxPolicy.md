---
applicable: Exchange Server 2010
schema: 2.0.0
---

# new-ManagedFolderMailboxPolicy

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the New-ManagedFolderMailboxPolicy cmdlet to create a managed folder mailbox policy.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
new-ManagedFolderMailboxPolicy [-Name] <String> [-Confirm] [-DomainController <Fqdn>]
 [-ManagedFolderLinks <ELCFolderIdParameter[]>] [-Organization <OrganizationIdParameter>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Managed folder mailbox policies are applied to user mailboxes to control message retention settings.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

Managed custom folders are a premium feature of messaging records management (MRM). Mailboxes with policies that include managed custom folders require an Exchange Server Enterprise client access license (CAL).

## EXAMPLES

### Example 1
```
New-ManagedFolderMailboxPolicy -Name "My Managed Folder Mailbox Policy" -ManagedFolderLinks Inbox, MyFolder
```

This example creates the managed folder mailbox policy My Managed Folder Mailbox Policy, with a list of managed folders to which the managed folder mailbox policy is to be linked.

## PARAMETERS

### -Name
The Name parameter specifies the name of the new managed folder mailbox policy.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: True
Position: 1
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
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedFolderLinks
The ManagedFolderLinks parameter specifies the list of managed folders to which the managed folder mailbox policy is to be linked.

```yaml
Type: ELCFolderIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Organization
This parameter is available for multi-tenant deployments. It isn't available for on-premises deployments. For more information about multi-tenant deployments, see Multi-Tenant Support.

The Organization parameter specifies the organization in which you'll perform this action. This parameter doesn't accept wildcard characters, and you must use the exact name of the organization.

```yaml
Type: OrganizationIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

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
Applicable: Exchange Server 2010

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

[Online Version](https://technet.microsoft.com/library/14423cb5-b93a-466f-b7b2-7f37f14fb896.aspx)

