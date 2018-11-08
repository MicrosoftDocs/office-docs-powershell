---
external help file: Microsoft.Exchange.ProvisioningAndMigration-Help.xml
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
title: Add-ADPermission
schema: 2.0.0
monikerRange: "exchserver-ps-2010 || exchserver-ps-2013 || exchserver-ps-2016 || exchserver-ps-2019"
---

# Add-ADPermission

## SYNOPSIS
This cmdlet is available only in on-premises Exchange.

Use the Add-ADPermission cmdlet to add permissions to an Active Directory object.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

### AccessRights
```
Add-ADPermission [-Identity] <ADRawEntryIdParameter> -User <SecurityPrincipalIdParameter>
 [-AccessRights <ActiveDirectoryRights[]>]
 [-ChildObjectTypes <ADSchemaObjectIdParameter[]>]
 [-Confirm]
 [-Deny]
 [-DomainController <Fqdn>]
 [-ExtendedRights <ExtendedRightIdParameter[]>]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>]
 [-InheritedObjectType <ADSchemaObjectIdParameter>]
 [-Properties <ADSchemaObjectIdParameter[]>]
 [-WhatIf] [<CommonParameters>]
```

### Owner
```
Add-ADPermission [-Identity] <ADRawEntryIdParameter> -Owner <SecurityPrincipalIdParameter>
 [-Confirm]
 [-DomainController <Fqdn>]
 [-WhatIf] [<CommonParameters>]
```

### Instance
```
Add-ADPermission -Instance <ADAcePresentationObject>
 [-AccessRights <ActiveDirectoryRights[]>]
 [-ChildObjectTypes <ADSchemaObjectIdParameter[]>]
 [-Confirm]
 [-Deny]
 [-DomainController <Fqdn>]
 [-ExtendedRights <ExtendedRightIdParameter[]>]
 [[-Identity] <ADRawEntryIdParameter>]
 [-InheritanceType <None | All | Descendents | SelfAndChildren | Children>]
 [-InheritedObjectType <ADSchemaObjectIdParameter>]
 [-Properties <ADSchemaObjectIdParameter[]>]
 [-User <SecurityPrincipalIdParameter>]
 [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The ADPermission cmdlets can be used to directly modify Active Directory access control lists (ACLs). Although some Microsoft Exchange features may continue to use the ADPermission cmdlets to manage permissions (for example Send and Receive connectors) Exchange 2013 and later versions no longer use customized ACLs to manage administrative permissions. If you want to grant or deny administrative permissions in Exchange 2013 or later, you need to use Role Based Access Control (RBAC). For more information about RBAC, see Permissions.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Add-ADPermission -Identity "Terry Adams" -User AaronPainter -AccessRights ExtendedRight -ExtendedRights "Send As"
```

This example grants Send As permissions for Aaron Painter to Terry Adams's mailbox.

### -------------------------- Example 2 --------------------------
```
Add-AdPermission "IP Secured Inbound" -User "NT AUTHORITY\ANONYMOUS LOGON" -ExtendedRights ms-Exch-SMTP-Submit,ms-Exch-SMTP-Accept-Any-Recipient,ms-Exch-Bypass-Anti-Spam
```

This example configures the IP Secured Inbound Receive connector to accept anonymous SMTP messages.

This example assumes that another security mechanism is used to ensure the Receive connector can't be used to send unsolicited commercial email messages. We recommend that you don't allow external clients to send messages anonymously through a Receive connector.

## PARAMETERS

### -Identity
The Identity parameter specifies the identity of the object that's getting permissions added. You can specify either the distinguished name (DN) of the object or the object's name if it's unique. If the DN or name contains spaces, enclose the name in quotation marks (").

```yaml
Type: ADRawEntryIdParameter
Parameter Sets: AccessRights, Owner
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

```yaml
Type: ADRawEntryIdParameter
Parameter Sets: Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
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
Parameter Sets: Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -Owner
The Owner parameter specifies the owner of the Active Directory object. If the name of the owner contains spaces, enclose the name in quotation marks (").

The Owner parameter can only be used with the Identity parameter and no other parameters.

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Owner
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -User
The User parameter specifies the user that the permissions are being granted to on the object. If the name contains spaces, enclose the name in quotation marks (").

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: AccessRights
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

```yaml
Type: SecurityPrincipalIdParameter
Parameter Sets: Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AccessRights
The AccessRights parameter specifies the rights needed to perform the operation. Valid values include:

- AccessSystemSecurity

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

```yaml
Type: ActiveDirectoryRights[]
Parameter Sets: AccessRights, Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ChildObjectTypes
The ChildObjectTypes parameter specifies what type of object the permission should be applied to.

The ChildObjectTypes parameter can only be used if the AccessRights parameter is set to CreateChild or DeleteChild.

```yaml
Type: ADSchemaObjectIdParameter[]
Parameter Sets: AccessRights, Instance
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

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

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

### -Deny
The Deny switch specifies whether to deny permissions to the user on the Active Directory object.

```yaml
Type: SwitchParameter
Parameter Sets: AccessRights, Instance
Aliases:
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

### -ExtendedRights
The ExtendedRights parameter specifies the extended rights needed to perform the operation.

```yaml
Type: ExtendedRightIdParameter[]
Parameter Sets: AccessRights, Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
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
Parameter Sets: AccessRights, Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
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
Parameter Sets: AccessRights, Instance
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Server 2019
Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Properties
The Properties parameter specifies what properties the object contains.

The Properties parameter can only be used if the AccessRights parameter is set to ReadProperty, WriteProperty or Self.

```yaml
Type: ADSchemaObjectIdParameter[]
Parameter Sets: AccessRights, Instance
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/bef9f3db-84f6-4a40-81cb-c9cb9b9ee201.aspx)
