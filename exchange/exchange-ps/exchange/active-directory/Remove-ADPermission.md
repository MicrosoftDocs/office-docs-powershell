---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
title: Remove-ADPermission
schema: 2.0.0
---

# Remove-ADPermission

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Remove-ADPermission cmdlet to remove permissions from an Active Directory object.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### Set1
```
Remove-ADPermission [-Identity] <ADRawEntryIdParameter> -User <SecurityPrincipalIdParameter>
 [-AccessRights <ActiveDirectoryRights[]>] [-ChildObjectTypes <ADSchemaObjectIdParameter[]>] [-Confirm] [-Deny]
 [-DomainController <Fqdn>] [-ExtendedRights <ExtendedRightIdParameter[]>]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>]
 [-InheritedObjectType <ADSchemaObjectIdParameter>] [-Properties <ADSchemaObjectIdParameter[]>] [-WhatIf]
 [<CommonParameters>]
```

### Set2
```
Remove-ADPermission [-Identity] <ADRawEntryIdParameter> [-Confirm] [-DomainController <Fqdn>] [-WhatIf]
 -Instance <ADAcePresentationObject> [-User <SecurityPrincipalIdParameter>]
 [-AccessRights <ActiveDirectoryRights[]>] [-ChildObjectTypes <ADSchemaObjectIdParameter[]>] [-Deny]
 [-ExtendedRights <ExtendedRightIdParameter[]>]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>]
 [-InheritedObjectType <ADSchemaObjectIdParameter>] [-Properties <ADSchemaObjectIdParameter[]>]
 [<CommonParameters>]
```

### Set3
```
Remove-ADPermission [[-Identity] <ADRawEntryIdParameter>] -Instance <ADAcePresentationObject>
 [-User <SecurityPrincipalIdParameter>] [-AccessRights <ActiveDirectoryRights[]>]
 [-ChildObjectTypes <ADSchemaObjectIdParameter[]>] [-Confirm] [-Deny] [-DomainController <Fqdn>]
 [-ExtendedRights <ExtendedRightIdParameter[]>]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>]
 [-InheritedObjectType <ADSchemaObjectIdParameter>] [-Properties <ADSchemaObjectIdParameter[]>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The ADPermission cmdlets can be used to directly modify Active Directory access control lists (ACLs). Although some Microsoft Exchange features may continue to use the ADPermission cmdlets to manage permissions (for example Send and Receive connectors) Exchange 2013 and later versions no longer use customized ACLs to manage administrative permissions. If you want to grant or deny administrative permissions in Exchange 2013 or later, you need to use Role Based Access Control (RBAC). For more information about RBAC, see Permissions.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Remove-ADPermission -Identity Administrator -User Kim -ExtendedRights "Send As"
```

This example removes the Send As permissions from user Kim on the user Administrator.

### -------------------------- Example 2 --------------------------
```
Remove-ADPermission "IP Secured Inbound" -User "NT AUTHORITY\ANONYMOUS LOGON" -ExtendedRights ms-Exch-SMTP-Submit,ms-Exch-SMTP-Accept-Any-Recipient,ms-Exch-Bypass-Anti-Spam
```

This example removes the ability for anonymous users to send messages through the Receive connector IP Secured Inbound.

## PARAMETERS

### -Identity
The Identity parameter specifies the object from which the permission should be removed.

You can specify either the distinguished name (DN) of the object or the object's name if it's unique. If the DN or name contains spaces, enclose the name in quotation marks (").

```yaml
Type: ADRawEntryIdParameter
Parameter Sets: Set1, Set2
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: ADRawEntryIdParameter
Parameter Sets: Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Instance
The Instance parameter enables you to pass an entire object to the command to be processed. It's mainly used in scripts where an entire object must be passed to the command.

```yaml
Type: ADAcePresentationObject
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -User
The User parameter specifies the user object that will have permissions removed.

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Set1
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Set2, Set3
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessRights
The AccessRights parameter specifies the rights needed to perform the operation. Valid values include:

- CreateChild

- DeleteChild

- ListChildren

- Self

- ReadProperty

- WriteProperty

- DeleteTree

- ListObject

- ExtendedRight

- Delete

- ReadControl

- GenericExecute

- GenericWrite

- GenericRead

- WriteDacl

- WriteOwner

- GenericAll

- Synchronize

- AccessSystemSecurity

```yaml
Type: ActiveDirectoryRights[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChildObjectTypes
The ChildObjectTypes parameter specifies what type of object the permission should be removed from.

The ChildObjectTypes parameter can only be used if the AccessRights parameter is set to CreateChild or DeleteChild.

```yaml
Type: ADSchemaObjectIdParameter[]
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
Aliases: cf
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Deny
The Deny switch specifies whether the permission to remove is a deny permission.

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

### -ExtendedRights
The ExtendedRights parameter specifies the extended rights to remove.

```yaml
Type: ExtendedRightIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InheritanceType
The InheritanceType parameter specifies whether permissions are inherited.

```yaml
Type: None | All | Descendents | SelfAndChildren | Children
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InheritedObjectType
The InheritedObjectType parameter specifies what kind of object inherits this access control entry (ACE).

```yaml
Type: ADSchemaObjectIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Properties
The Properties parameter specifies what properties the object contains.

The Properties parameter can only be used if the AccessRights parameter is set to ReadProperty, WriteProperty, or Self.

```yaml
Type: ADSchemaObjectIdParameter[]
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
Aliases: wi
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

[Online Version](https://technet.microsoft.com/library/0e45951a-2b5a-4aa9-a709-def61d7d4972.aspx)
