---
external help file: Microsoft.Exchange.RecordsandEdge-Help.xml
applicable: Exchange Server 2010
title: Get-ManagedFolder
schema: 2.0.0
monikerRange: "exchserver-ps-2010"
---

# Get-ManagedFolder

## SYNOPSIS
This cmdlet is available only in Exchange Server 2010.

Use the Get-ManagedFolder cmdlet to retrieve the attributes of one or more managed folders.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Get-ManagedFolder [[-Identity] <ELCFolderIdParameter>] [-DomainController <Fqdn>]
 [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

### Set2
```
Get-ManagedFolder [-DomainController <Fqdn>] [-Mailbox <MailboxIdParameter>]
 [-Organization <OrganizationIdParameter>] [<CommonParameters>]
```

## DESCRIPTION
The Get-ManagedFolder cmdlet retrieves the specified managed folder attributes:

- If only an Identity parameter value is present, the command retrieves the specified folder and all associated attributes.

- If a Mailbox parameter value is present, the command retrieves all managed folders that apply to that user by means of a managed folder mailbox policy applied by an administrator. Managed folders that users add by means of an organization's managed folder opt-in Web site aren't displayed by this command.

- If no parameter values are specified, the command retrieves all the folder objects and their associated attributes.

The Get-ManagedFolder cmdlet accepts a ManagedFolder object or an identity string as pipelined input.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-ManagedFolder MyManagedFolder | Format-List
```

This example retrieves information about the managed folder MyManagedFolder. The output of the Get-ManagedFolder cmdlet is piped to the Format-List cmdlet so that all the available information is displayed in the result.

## PARAMETERS

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

### -Identity
The Identity parameter specifies the name, distinguished name (DN), or GUID of the managed folder.

```yaml
Type: ELCFolderIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010
Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Mailbox
The Mailbox parameter specifies the identity of the mailbox. Valid values include SMTP address, domain name, and alias. The command retrieves all the folders that apply to the specified user.

```yaml
Type: MailboxIdParameter
Parameter Sets: Set2
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

[Online Version](https://technet.microsoft.com/library/a30939b7-1291-48d8-b19a-512a0a031121.aspx)
