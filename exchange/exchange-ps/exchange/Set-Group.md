---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection
schema: 2.0.0
---

# Set-Group

## SYNOPSIS
!!! Exchange Server 2010

Use the Set-Group cmdlet to modify group object settings visible in Active Directory Users and Computers. If the group is a mail-enabled security group or a distribution group, you can use the Set-DistributionGroup cmdlet to modify other Microsoft Exchange Server 2010 settings that aren't available by using the Set-Group cmdlet.

!!! Exchange Server 2013

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-Group cmdlet to modify group object settings visible in Active Directory Users and Computers. If the group is a mail-enabled security group or a distribution group, you can use the Set-DistributionGroup cmdlet to modify other Microsoft Exchange settings that aren't available by using the Set-Group cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-Group cmdlet to modify group object settings. If the group is a mail-enabled security group or a distribution group, you can use the Set-DistributionGroup cmdlet to modify other Microsoft Exchange settings that aren't available by using the Set-Group cmdlet.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-Group [-Identity] <GroupIdParameter> [-BypassSecurityGroupManagerCheck] [-Confirm] [-DisplayName <String>]
 [-DomainController <Fqdn>] [-IgnoreDefaultScope] [-IsHierarchicalGroup <$true | $false>]
 [-ManagedBy <GeneralRecipientIdParameter[]>] [-Name <String>] [-Notes <String>]
 [-PhoneticDisplayName <String>] [-SeniorityIndex <Int32>] [-SimpleDisplayName <String>] [-Universal] [-WhatIf]
 [-WindowsEmailAddress <SmtpAddress>] [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You can't use the Set-Group cmdlet to modify dynamic distribution groups. To modify dynamic distribution groups, use the Set-DynamicDistributionGroup cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Distribution group" entry in the Mailbox Permissions topic.

!!! Exchange Server 2013

You can't use the Set-Group cmdlet to modify dynamic distribution groups. To modify dynamic distribution groups, use the Set-DynamicDistributionGroup cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Distribution groups" entry in the Recipients Permissions topic.

!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

You can't use the Set-Group cmdlet to modify dynamic distribution groups. To modify dynamic distribution groups, use the Set-DynamicDistributionGroup cmdlet.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Set-Group -Identity "Legal Department" -Universal -Notes "verified"
```

This example applies the following changes to the existing global security group Legal Department:


Change the group's scope to universal.

Add a Notes parameter value of verified.

### Example 1 -------------------------- (Exchange Server 2013)
```
Set-Group -Identity "Legal Department" -Universal -Notes "verified"
```

This example applies the following changes to the existing global security group Legal Department:


Change the group's scope to universal.

Add a Notes parameter value of verified.

### Example 1 -------------------------- (Exchange Server 2016)
```
Set-Group -Identity "Legal Department" -Universal -Notes "verified"
```

This example applies the following changes to the existing global security group Legal Department:


Change the group's scope to universal.

Add a Notes parameter value of verified.

### Example 1 -------------------------- (Exchange Online)
```
Set-Group -Identity "Legal Department" -Universal -Notes "verified"
```

This example applies the following changes to the existing global security group Legal Department:


Change the group's scope to universal.

Add a Notes parameter value of verified.

### Example 1 -------------------------- (Exchange Online Protection)
```
Set-Group -Identity "Legal Department" -Universal -Notes "verified"
```

This example applies the following changes to the existing global security group Legal Department:


Change the group's scope to universal.

Add a Notes parameter value of verified.

### Example 2 -------------------------- (Exchange Server 2010)
```
Set-Group -Identity "Human Resources" -IsHierarchicalGroup $true -SeniorityIndex 1
```

This example specifies that the group Human Resources is a hierarchical group and will display last within its hierarchy because its index number is 1.

### Example 2 -------------------------- (Exchange Server 2013)
```
Set-Group -Identity "Human Resources" -IsHierarchicalGroup $true -SeniorityIndex 1
```

This example specifies that the group Human Resources is a hierarchical group and will display last within its hierarchy because its index number is 1.

### Example 2 -------------------------- (Exchange Server 2016)
```
Set-Group -Identity "Human Resources" -IsHierarchicalGroup $true -SeniorityIndex 1
```

This example specifies that the group Human Resources is a hierarchical group and will display last within its hierarchy because its index number is 1.

### Example 2 -------------------------- (Exchange Online)
```
Set-Group -Identity "Human Resources" -IsHierarchicalGroup $true -SeniorityIndex 1
```

This example specifies that the group Human Resources is a hierarchical group and will display last within its hierarchy because its index number is 1.

### Example 2 -------------------------- (Exchange Online Protection)
```
Set-Group -Identity "Human Resources" -IsHierarchicalGroup $true -SeniorityIndex 1
```

This example specifies that the group Human Resources is a hierarchical group and will display last within its hierarchy because its index number is 1.

## PARAMETERS

### -Identity
!!! Exchange Server 2010

The Identity parameter specifies the object that you want to modify.

This parameter accepts the following values:

- Alias

  Example: JPhillips

- Canonical DN

  Example: Atlanta.Corp.Contoso.Com/Users/JPhillips

- Display Name

  Example: Jeff Phillips

- Distinguished Name (DN)

  Example: CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com

- Domain\\Account

  Example: Atlanta\\JPhillips

- GUID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2

- Immutable ID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com

- Legacy Exchange DN

  Example: /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips

- SMTP Address

  Example: Jeff.Phillips@contoso.com

- User Principal Name

  Example: JPhillips@contoso.com



!!! Exchange Server 2013

The Identity parameter specifies the object that you want to modify.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Identity parameter specifies the group that you want to modify. You can use any value that uniquely identifies the group.

For example:

- Name

- Display name

- Distinguished name (DN)

- Canonical DN

- GUID



```yaml
Type: GroupIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -BypassSecurityGroupManagerCheck
!!! Exchange Server 2010, Exchange Server 2013

The BypassSecurityGroupManagerCheck parameter specifies whether to bypass security checks and moderation if the specified group is a moderated distribution group.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The BypassSecurityGroupManagerCheck switch specifies whether to allow a user who isn't an owner of the group to modify or delete the group. If you aren't defined in the ManagedBy property of the group, you need to use this switch in commands that modify or delete the group. To use this switch, your account requires specific permissions based on the group type:

- Distribution groups or mail-enabled security groups: You need to be a member of the Organization Management role group or have the Security Group Creation and Membership role assigned.

- Role groups: You need to be a member of the Organization Management role group or have the Role Management role assigned.

You don't need to specify a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
!!! Exchange Server 2010, Exchange Server 2013

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-* and Set-* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
!!! Exchange Server 2010

The DisplayName parameter specifies the name of the group in the Exchange Management Console and in the Exchange global address list (GAL). This parameter has significance only if the group is mail-enabled.



!!! Exchange Server 2013

The DisplayName parameter specifies the name of the group in the Exchange Administration Center and in the Exchange global address list (GAL). This parameter has significance only if the group is mail-enabled.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The DisplayName parameter specifies the display name of the group. The display name is visible in the Exchange admin center and in address lists. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").

This parameter is meaningful only if the group is mail-enabled.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
!!! Exchange Server 2010

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.



!!! Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

The DomainController parameter isn't supported on Edge Transport servers. An Edge Transport server uses the local instance of Active Directory Lightweight Directory Services (AD LDS) to read and write data.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreDefaultScope
!!! Exchange Server 2010

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as GUID, aren't accepted.



!!! Exchange Server 2013

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope parameter instructs the command to ignore the default recipient scope setting for the Exchange Management Shell session and use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently in the default scope. Using the IgnoreDefaultScope parameter introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as GUID, aren't accepted.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

This parameter is available only in on-premises Exchange.

The IgnoreDefaultScope switch tells the command to ignore the default recipient scope setting for the Exchange Management Shell session, and to use the entire forest as the scope. This allows the command to access Active Directory objects that aren't currently available in the default scope.

Using the IgnoreDefaultScope switch introduces the following restrictions:

- You can't use the DomainController parameter. The command uses an appropriate global catalog server automatically.

- You can only use the DN for the Identity parameter. Other forms of identification, such as alias or GUID, aren't accepted.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsHierarchicalGroup
!!! Exchange Server 2010, Exchange Server 2013

The IsHierarchicalGroup parameter specifies whether the group is part of a hierarchical address book. This parameter accepts $true or $false. The default value is $false.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The IsHierarchicalGroup parameter specifies whether the group is part of a hierarchical address book. Valid values are $true or $false. The default value is $false.



```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ManagedBy
!!! Exchange Server 2010

The ManagedBy parameter specifies the name of the user, group, or contact that appears in the Managed by tab of the Active Directory object.

This parameter accepts the following values:

- Alias

  Example: JPhillips

- Canonical DN

  Example: Atlanta.Corp.Contoso.Com/Users/JPhillips

- Display Name

  Example: Jeff Phillips

- Distinguished Name (DN)

  Example: CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com

- Domain\\Account

  Example: Atlanta\\JPhillips

- GUID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2

- Immutable ID

  Example: fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com

- Legacy Exchange DN

  Example: /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips

- SMTP Address

  Example: Jeff.Phillips@contoso.com

- User Principal Name

  Example: JPhillips@contoso.com



!!! Exchange Server 2013

The ManagedBy parameter specifies the name of the user, group, or contact that appears in the Managed by tab of the Active Directory object.

This parameter accepts the following values:

- Alias (for example, JPhillips)

- Canonical DN (for example, Atlanta.Corp.Contoso.Com/Users/JPhillips)

- Display Name (for example, Jeff Phillips)

- Distinguished Name (DN) (for example, CN=JPhillips,CN=Users,DC=Atlanta,DC=Corp,DC=contoso,DC=com)

- Domain\\Account (for example, Atlanta\\JPhillips)

- GUID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2)

- Immutable ID (for example, fb456636-fe7d-4d58-9d15-5af57d0354c2@contoso.com)

- Legacy Exchange DN (for example, /o=Contoso/ou=AdministrativeGroup/cn=Recipients/cn=JPhillips)

- SMTP Address (for example, Jeff.Phillips@contoso.com)

- User Principal Name (for example, JPhillips@contoso.com)



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The ManagedBy parameter specifies an owner for the group. A group must have at least one owner. If you don't use this parameter to specify the owner when you create the group, the user account that created the group is the owner. The group owner is able to:

- Modify the properties of the group

- Add or remove group members

- Delete the group

- Approve member depart or join requests (if available)

- Approve messages sent to the group if moderation is enabled, but no moderators are specified.

The owner you specify for this parameter must be a mailbox, mail user or mail-enabled security group (a mail-enabled security principal that can have permissions assigned). You can use any value that uniquely identifies the owner. For example:

- Name

- Display name

- Alias

- Distinguished name (DN)

- Canonical DN

- \<domain name\>\\\<account name\>

- Email address

- GUID

- LegacyExchangeDN

- SamAccountName

- User ID or user principal name (UPN)

To enter multiple owners and overwrite all existing entries, use the following syntax: \<owner1\>,\<owner2\>.... If the values contain spaces or otherwise require quotation marks, you need to use the following syntax: "\<owner1\>","\<owner2\>"....

To add or remove owners without affecting other existing entries, use the following syntax: @{Add="\<owner1\>","\<owner2\>"...; Remove="\<owner3\>","\<owner4\>"...}.



An owner that you specify with this parameter isn't automatically a member of the group. You need to manually add the owner as a member.



```yaml
Type: GeneralRecipientIdParameter[]
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
!!! Exchange Server 2010

The Name parameter specifies the name of the group. The Name parameter specifies the group name in Active Directory Users and Computers and also in the Group Name field in the Exchange Management Console if the group is mail-enabled.



!!! Exchange Server 2013

The Name parameter specifies the name of the group. The Name parameter specifies the group name in Active Directory Users and Computers.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Name parameter specifies the unique name of the group. The maximum length is 64 characters. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Notes
!!! Exchange Server 2010, Exchange Server 2013

The Notes parameter specifies the notes that describe the purpose of the group.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Notes parameters specifies additional information about the object. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PhoneticDisplayName
!!! Exchange Server 2010

The PhoneticDisplayName parameter specifies a phonetic pronunciation of the DisplayName parameter.

The maximum length of this parameter value is 255 characters. For more information about the PhoneticDisplayName parameter and speech recognition, see Understanding Automatic Speech Recognition Directory Lookups.



!!! Exchange Server 2013

The PhoneticDisplayName parameter specifies a phonetic pronunciation of the DisplayName parameter.

The maximum length of this parameter value is 255 characters.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The PhoneticDisplayName parameter specifies an alternate spelling of the user's name that's used for text to speech in Unified Messaging (UM) environments. Typically, you use this parameter when the pronunciation and spelling of the user's name don't match. The maximum length is 256 characters. If the value contains spaces, enclose the value in quotation marks (").



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SeniorityIndex
The SeniorityIndex parameter specifies the order in which this group will display in a hierarchical address book. A group with a value of 2 will display higher in an address book than a group with a value of 1.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SimpleDisplayName
!!! Exchange Server 2010, Exchange Server 2013

The SimpleDisplayName parameter is used to display an alternative description of the object when only a limited set of characters is permitted. Valid characters are:

- a - z

- A - Z

- 0 - 9

- "\<space\>", """, "'", "(", ")", "+", ",", "-", ".", "/", ":", and "?".

The SimpleDisplayName parameter has meaning only for mail-enabled objects.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The SimpleDisplayName parameter is used to display an alternative description of the object when only a limited set of characters is permitted. Valid characters are:

- a - z

- A - Z

- 0 - 9

- "\<space\>", """, "'", "(", ")", "+", ",", "-", ".", "/", ":", and "?".

This parameter is meaningful only if the group is mail-enabled.



```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Universal
!!! Exchange Server 2010, Exchange Server 2013

The Universal parameter changes the scope of the group from global or domain local to universal.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The Universal swtich changes the scope of the group from Global or DomainLocal to Universal. You don't need to specify a value with this switch.



```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WindowsEmailAddress
!!! Exchange Server 2010, Exchange Server 2013

The WindowsEmailAddress parameter specifies the value of the E-mail field of the Active Directory object.



!!! Exchange Server 2016, Exchange Online, Exchange Online Protection

The WindowsEmailAddress parameter specifies the Windows email address for this recipient. This is a common Active Directory attribute that's present in all environments, including environments without Exchange. Using the WindowsEmailAddress parameter on a recipient has one of the following results:

- In on-premises environments where the recipient is subject to email address policies (the EmailAddressPolicyEnabled property is set to the value True for the recipient), the WindowsEmailAddress parameter has no effect on the WindowsEmailAddress property or the primary email address value.

- In cloud environments or in on-premises environments where the recipient isn't subject to email address policies (the EmailAddressPolicyEnabled property is set to the value False for the recipient), the WindowsEmailAddress parameter updates the WindowsEmailAddress property and the primary email address to the same value.

The WindowsEmailAddress property is visible for the recipient in Active Directory Users and Computers in the E-mail attribute. The attribute common name is E-mail-Addresses, and the Ldap-Display-Name is mail. If you modify this attribute in Active Directory, the recipient's primary email address is not updated to the same value.



```yaml
Type: SmtpAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online, Exchange Online Protection

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

[Online Version](https://technet.microsoft.com/library/924e6eb5-bb06-4e15-b122-cab414291cef.aspx)

