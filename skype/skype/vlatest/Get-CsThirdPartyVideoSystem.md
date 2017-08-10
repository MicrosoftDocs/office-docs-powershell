---
external help file: 
applicable: Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsThirdPartyVideoSystem

## SYNOPSIS
Returns information about Directory contact objects that represent a third-party video system.
A third-party video system is a video teleconferencing (VTC) device that provides users with telepresence: the ability to participate in online meetings and conferences with full audio and video capabilities.

## SYNTAX

```
Get-CsThirdPartyVideoSystem [[-Identity] <UserIdParameter>] [-Confirm] [-Credential <PSCredential>]
 [-DomainController <Fqdn>] [-Filter <String>] [-LdapFilter <String>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
Third-party video systems are VTC devices that provide remote users with telepresence capabilities (most notably audio and video).
In Skype for Business Server 2015, third-party VTC devices can be configured as Active Directory contact objects, much in the same way that analog phones and common area phones can be configured as contact objects.
Associating each VTC device with a contact object makes it easy for administrators to track, and to manage, these devices.
VTC contact objects can be created by using the New-CsThirdPartyVideoSystem cmdlet.
Information about these contact objects can be returned by using the Get-CsThirdPartyVideoSystem cmdlet.

## EXAMPLES

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns a collection of all the third-party video systems configured for use in the organization.

Get-CsThirdPartyVideoSystem

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, information is returned for a single third-party video system: the system with the Active Directory display name Redmond Video System.

Get-CsThirdPartyVideoSystem -Filter {DisplayName -eq "Redmond Video System"}

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 uses the OU parameter to return all the third-party video systems with accounts in the Telecommunications OU.
Note that this command also returns information for any third-party video systems that have accounts in a child OU of the Telecommunications OU (for example, ou=Telecommunications,ou=AudioVideo,dc=litwareinc,dc=com).

Get-CsThirdPartyVideoSystem -OU "ou=Telecommunications,dc=litwareinc,dc=com"

## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Credential
Enables you to run the Get-CsThirdPartyVideoSystem cmdlet under alternate credentials.
This might be required if the account you used to log on to the Windows does not have the necessary privileges required to work with contact objects.

To use the Credential parameter, first use the Get-Credential cmdlet to create a PSCredential object.
For details, see the Get-Credential cmdlet Help topic.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve contact information.
To connect to a particular domain controller, include the DomainController parameter followed by the fully qualified domain name (FQDN) of the computer; for example, atl-cs-001.litwareinc.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to limit the returned data by filtering on attributes specific to Skype for Business Server 2015.
For example, you can limit returned data to third-party video system contact objects that have been assigned a specific voice policy, or contacts that have not been assigned a specific voice policy.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet.
For example, a filter that returns only video systems in the IT department would look like this, with Department representing the Active Directory attribute, -eq representing the comparison operator (equal to), and "IT" representing the filter value:

-Filter {Department -eq "IT"}

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the third-party video system.
Video systems are identified by using the Active Directory distinguished name of the associated contact object.
By default, video systems use a GUID (globally unique identifier) as their common name, which means systems will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LdapFilter
Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business Server 2015).
For example, you can limit returned data to contact objects that have been assigned to a specific department or are located in a specific building.

The LdapFilter parameter uses the LDAP query language when creating filters.
For example, a filter that returns only contact objects representing video systems in the city of Redmond would look like this:

-LdapFilter "l=Redmond"

In the preceding filter, "l" represents the Active Directory attribute (locality); "=" represents the comparison operator (equal to); and "Redmond" represents the filter value.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU
Enables you to return contact objects from a specific Active Directory organizational unit (OU).
The cmdlet will then return data from both the specified OU and any of its child OUs.
For example, if the Finance OU has two child OUs -- AccountsPayable and AccountsReceivable - third-party video system information will be returned from each of these OUs.

When specifying an OU, use the distinguished name of that container; for example: -OU "OU=Finance,dc=litwareinc,dc=com".

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by a command.
For example, to return 3 video systems (regardless of how many video systems are in your forest), include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which 7 systems will be returned.
If you set the ResultSize to 7 but you have only 3 video systems in your forest, the command will return those 3 systems and then complete without error.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The Get-CsThirdPartyVideoSystem cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Get-CsThirdPartyVideoSystem cmdlet returns instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADThirdPartyVideoSystemContact object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6d70dbc0-75a1-45ec-9d21-994eb581d5cd(OCS.16).aspx)

