---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Move-CsCommonAreaPhone

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Moves one or more common area phones to a new Registrar pool.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Moves one or more common area phones to a new Registrar pool.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

###  (Default)
```
Move-CsCommonAreaPhone [-Identity] <UserIdParameter> [-Target] <Fqdn> [-DomainController <Fqdn>]
 [-ProxyPool <Fqdn>] [-Force] [-PassThru] [-WhatIf] [-Confirm] [-IgnoreBackendStoreException]
 [<CommonParameters>]
```

### Identity
```
Move-CsCommonAreaPhone [-Identity] <UserIdParameter> [-Target] <Fqdn> [-Confirm] [-DomainController <Fqdn>]
 [-Force] [-IgnoreBackendStoreException] [-PassThru] [-ProxyPool <Fqdn>] [-Report <String>] [-WhatIf]
 [<CommonParameters>]
```

### Users
```
Move-CsCommonAreaPhone [-Target] <Fqdn> -UserList <String> [-ConcurrentMovesPerFE <Int32>] [-Confirm]
 [-DomainController <Fqdn>] [-Force] [-IgnoreBackendStoreException] [-PassThru] [-ProxyPool <Fqdn>]
 [-Report <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Common area phones are IP telephones that are not associated with an individual user.
Instead of being located in someone's office, common area phones are typically located in building lobbies, cafeterias, employee lounges, meeting rooms and other locations where a large number of people are likely to gather.
This presents administrators with a management challenge; that's because phone use in Lync Server 2010 is typically maintained by using voice policies and dial plans that are assigned to individual users.
Common area phones do not have individual users assigned to them.

The solution to this challenge is to create Active Directory contact objects for all your common area phones.
(These contact objects can be created by using the New-CsCommonAreaPhone cmdlet.) Like user accounts, these contact objects can be assigned policies and voice plans.
As a result, you will be able to maintain control over common area phones even though those phones are not associated with an individual user. 
For example, if you do not want people to have the ability to transfer or park calls from a common area phone, you can create a voice policy that prohibits call transfers and call parking, and then assign that policy to the common area phone.
(Or, more correctly, to the contact object that represents the common area phone.)

The Move-CsCommonAreaPhone cmdlet enables you to move an existing common area phone to a new Registrar pool.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Move-CsCommonAreaPhone cmdlet locally: RTCUniversalUserAdmins.
Permissions to run this cmdlet for specific sites or specific Active Directory organizational units (OUs) can be assigned by using the Grant-CsOUPermission cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Move-CsCommonAreaPhone"}

**Below Content Applies To:** Lync Server 2013

Common area phones are IP telephones that are not associated with an individual user.
Instead of being located in someone's office, common area phones are typically located in building lobbies, cafeterias, employee lounges, meeting rooms and other locations where a large number of people are likely to gather.
This presents administrators with a management challenge; that's because phone use in Lync Server is typically maintained by using voice policies and dial plans that are assigned to individual users.
Common area phones do not have individual users assigned to them.

The solution to this challenge is to create Active Directory contact objects for all your common area phones.
(These contact objects can be created by using the New-CsCommonAreaPhone cmdlet.) Like user accounts, these contact objects can be assigned policies and voice plans.
As a result, you will be able to maintain control over common area phones even though those phones are not associated with an individual user.
For example, if you do not want people to have the ability to transfer or park calls from a common area phone, you can create a voice policy that prohibits call transfers and call parking, and then assign that policy to the common area phone.
(Or, more correctly, to the contact object that represents the common area phone.)

The Move-CsCommonAreaPhone cmdlet enables you to move an existing common area phone to a new Registrar pool.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Move-CsCommonAreaPhone cmdlet locally: RTCUniversalUserAdmins.
Permissions to run this cmdlet for specific sites or specific Active Directory organizational units (OUs) can be assigned by using the Grant-CsOUPermission cmdlet.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Move-CsCommonAreaPhone"}

**Below Content Applies To:** Skype for Business Server 2015

Common area phones are IP telephones that are not associated with an individual user.
Instead of being located in someone's office, common area phones are typically located in building lobbies, cafeterias, employee lounges, meeting rooms and other locations where a large number of people are likely to gather.
This presents administrators with a management challenge; that's because phone use in Skype for Business Server 2015 is typically maintained by using voice policies and dial plans that are assigned to individual users.
Common area phones do not have individual users assigned to them.

The solution to this challenge is to create Active Directory contact objects for all your common area phones.
(These contact objects can be created by using the New-CsCommonAreaPhone cmdlet.) Like user accounts, these contact objects can be assigned policies and voice plans.
As a result, you will be able to maintain control over common area phones even though those phones are not associated with an individual user.
For example, if you do not want people to have the ability to transfer or park calls from a common area phone, you can create a voice policy that prohibits call transfers and call parking, and then assign that policy to the common area phone.
(Or, more correctly, to the contact object that represents the common area phone.)

The Move-CsCommonAreaPhone cmdlet enables you to move an existing common area phone to a new Registrar pool.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Move-CsCommonAreaPhone -Identity "CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com" -Target atl-cs-001.litwareinc.com
```

The command shown in Example 1 moves the common area phone with the Identity CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com to the Registrar pool atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 moves the common area phone with the Identity CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com to the Registrar pool atl-cs-001.litwareinc.com.

Move-CsCommonAreaPhone -Identity "CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com" -Target atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 moves the common area phone with the Identity CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com to the Registrar pool atl-cs-001.litwareinc.com.

Move-CsCommonAreaPhone -Identity "CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com" -Target atl-cs-001.litwareinc.com

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsCommonAreaPhone | Where-Object {$_.DisplayName -eq "Building 31 Cafeteria"} | Move-CsCommonAreaPhone -Target atl-cs-001.litwareinc.com
```

In Example 2, the common area phone with the Active Directory display name "Building 31 Cafeteria" is moved to the Registrar pool atl-cs-001.litwareinc.com.
To do this, Get-CsCommonAreaPhone is first called without any parameters in order to return a collection of all the common area phones currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those phones where the DisplayName attribute is equal to "Building 31 Cafeteria." That filtered collection is then piped to Move-CsCommonAreaPhone, which moves each phone in the collection to atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the common area phone with the Active Directory display name "Building 31 Cafeteria" is moved to the Registrar pool atl-cs-001.litwareinc.com.
To do this, Get-CsCommonAreaPhone is first called without any parameters in order to return a collection of all the common area phones currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those phones where the DisplayName attribute is equal to "Building 31 Cafeteria." That filtered collection is then piped to Move-CsCommonAreaPhone, which moves each phone in the collection to atl-cs-001.litwareinc.com.

Get-CsCommonAreaPhone | Where-Object {$_.DisplayName -eq "Building 31 Cafeteria"} | Move-CsCommonAreaPhone -Target atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the common area phone with the Active Directory display name "Building 31 Cafeteria" is moved to the Registrar pool atl-cs-001.litwareinc.com.
To do this, the Get-CsCommonAreaPhone cmdlet is first called without any parameters in order to return a collection of all the common area phones currently in use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out only those phones where the DisplayName attribute is equal to "Building 31 Cafeteria." That filtered collection is then piped to the Move-CsCommonAreaPhone cmdlet, which moves each phone in the collection to atl-cs-001.litwareinc.com.

Get-CsCommonAreaPhone | Where-Object {$_.DisplayName -eq "Building 31 Cafeteria"} | Move-CsCommonAreaPhone -Target atl-cs-001.litwareinc.com

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsCommonAreaPhone | Where-Object {$_.RegistrarPool -match "dublin-cs-001.litwareinc.com"} | Move-CsCommonAreaPhone -Target atl-cs-001.litwareinc.com
```

The preceding example moves all the common area phones currently homed on the Registrar pool dublin-cs-001.litwareinc.com to the Registrar pool atl-cs-001.litwareinc.com.
To carry out this task, the command first calls Get-CsCommonAreaPhone without any parameters; that returns a collection of all the common area phones configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out all the common area phones where the RegistrarPool is equal to dublin-cs-001.litwareinc.com.
This collection is then piped to Move-CsCommonAreaPhone, which moves each phone in the collection to the new Registrar pool atl-cs-001.litwareinc.com.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

Example 3 moves all the common area phones currently homed on the Registrar pool dublin-cs-001.litwareinc.com to the Registrar pool atl-cs-001.litwareinc.com.
To carry out this task, the command first calls Get-CsCommonAreaPhone without any parameters; that returns a collection of all the common area phones configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out all the common area phones where the RegistrarPool is equal to dublin-cs-001.litwareinc.com.
This collection is then piped to Move-CsCommonAreaPhone, which moves each phone in the collection to the new Registrar pool atl-cs-001.litwareinc.com.

Get-CsCommonAreaPhone | Where-Object {$_.RegistrarPool -match "dublin-cs-001.litwareinc.com"} | Move-CsCommonAreaPhone -Target atl-cs-001.litwareinc.com

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

Example 3 moves all the common area phones currently homed on the Registrar pool dublin-cs-001.litwareinc.com to the Registrar pool atl-cs-001.litwareinc.com.
To carry out this task, the command first calls the Get-CsCommonAreaPhone cmdlet without any parameters; that returns a collection of all the common area phones configured for use in the organization.
This collection is then piped to the Where-Object cmdlet, which picks out all the common area phones where the RegistrarPool is equal to dublin-cs-001.litwareinc.com.
This collection is then piped to the Move-CsCommonAreaPhone cmdlet, which moves each phone in the collection to the new Registrar pool atl-cs-001.litwareinc.com.

Get-CsCommonAreaPhone | Where-Object {$_.RegistrarPool -match "dublin-cs-001.litwareinc.com"} | Move-CsCommonAreaPhone -Target atl-cs-001.litwareinc.com

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsCommonAreaPhone | Where-Object {$_.RegistrarPool -match "dublin-cs-001.litwareinc.com"} | Move-CsCommonAreaPhone -Target atl-cs-001.litwareinc.com -PassThru | Grant-CsVoicePolicy -PolicyName AtlantaVoicePolicy
```

Example 4 is a variation of the command shown in Example 3; in this case, however, the common area phones are not only moved to a new Registrar pool, but are also assigned a new per-user voice policy.
To do this, the PassThru parameter is included when calling Move-CsCommonAreaPhone; this is required in order to pass the common area phone objects through the pipeline.
(By default, Move-CsCommonAreaPhone does not pass objects through the pipeline.) After the phones have been moved, the phone objects are piped to the Grant-CsVoicePolicy cmdlet, which assigns the voice policy AtlantaVoicePolicy to each of the newly-moved phones.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 is a variation of the command shown in Example 3; in this case, however, the common area phones are not only moved to a new Registrar pool, but are also assigned a new per-user voice policy.
To do this, the PassThru parameter is included when calling Move-CsCommonAreaPhone; this is required in order to pass the common area phone objects through the pipeline.
(By default, Move-CsCommonAreaPhone does not pass objects through the pipeline.) After the phones have been moved, the phone objects are piped to the Grant-CsVoicePolicy cmdlet, which assigns the voice policy AtlantaVoicePolicy to each of the newly-moved phones.

Get-CsCommonAreaPhone | Where-Object {$_.RegistrarPool -match "dublin-cs-001.litwareinc.com"} | Move-CsCommonAreaPhone -Target atl-cs-001.litwareinc.com -PassThru | Grant-CsVoicePolicy -PolicyName AtlantaVoicePolicy

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 is a variation of the command shown in Example 3; in this case, however, the common area phones are not only moved to a new Registrar pool, but are also assigned a new per-user voice policy.
To do this, the PassThru parameter is included when calling the Move-CsCommonAreaPhone cmdlet; this is required in order to pass the common area phone objects through the pipeline.
(By default, the Move-CsCommonAreaPhone cmdlet does not pass objects through the pipeline.) After the phones have been moved, the phone objects are piped to the Grant-CsVoicePolicy cmdlet, which assigns the voice policy AtlantaVoicePolicy to each of the newly-moved phones.

Get-CsCommonAreaPhone | Where-Object {$_.RegistrarPool -match "dublin-cs-001.litwareinc.com"} | Move-CsCommonAreaPhone -Target atl-cs-001.litwareinc.com -PassThru | Grant-CsVoicePolicy -PolicyName AtlantaVoicePolicy

## PARAMETERS

### -Identity
Unique identifier for the common area phone.
Common area phones are identified using the Active Directory distinguished name of the associated contact object.
By default, common area phones use a globally unique identifier (GUID) as their common name, which means that phones will typically have an Identity similar to this: CN={ce84964a-c4da-4622-ad34-c54ff3ed361f},OU=Redmond,DC=Litwareinc,DC=com.

```yaml
Type: UserIdParameter
Parameter Sets: (All), Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Target
The fully qualified domain name (FQDN) of the Registrar pool where the common area phone should be moved; for example: atl-cs-001.litwareinc.com.
In addition to a Registrar pool, the Target can also be the FQDN of a hosting provider.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to move the common area phone.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-cs-001) or its FQDN (for example, atl-cs-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyPool
**Below Content Applies To:** Lync Server 2010

This parameter is used only for Microsoft Lync Online 2010.
It should not be used with an on-premises implementation of Lync Server.



**Below Content Applies To:** Lync Server 2013

This parameter is used only for Lync Online.
It should not be used with an on-premises implementation of Lync Server.



**Below Content Applies To:** Skype for Business Server 2015

This parameter is used only for Skype for Business Online.
It should not be used with an on-premises implementation of Skype for Business Server 2015.



```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
If present, moves the common area phone but deletes any associated data (such as policies that were assigned to the device).
If not present, the phone is moved along with any associated data.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Enables you to pass a user object through the pipeline that represents the user account being moved.
By default, the Move-CsCommonAreaPhone cmdlet does not pass objects through the pipeline.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IgnoreBackendStoreException
When present, instructs the computer to ignore any errors that might occur with the backend database and attempt to move the common area phone despite those errors.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserList
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: Users
Aliases: 
Applicable: Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConcurrentMovesPerFE
PARAMVALUE: Int32

```yaml
Type: Int32
Parameter Sets: Users
Aliases: 
Applicable: Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Report
PARAMVALUE: String

```yaml
Type: String
Parameter Sets: Identity, Users
Aliases: 
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
String.
Move-CsCommonAreaPhone accepts a pipelined string value that represents the Identity of the common area phone.

###  
String.
The Move-CsCommonAreaPhone cmdlet accepts a pipelined string value that represents the Identity of the common area phone.

## OUTPUTS

###  
By default, Move-CsCommonAreaPhone does not return any objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADCommonAreaPhoneContact object.

###  
By default, the Move-CsCommonAreaPhone cmdlet does not return any objects or values.
However, if you include the PassThru parameter, the cmdlet will return instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADCommonAreaPhoneContact object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/af5f832c-1be9-4495-ba1a-c10ca50d7b29(OCS.14).aspx)

[Get-CsCommonAreaPhone]()

[New-CsCommonAreaPhone]()

[Remove-CsCommonAreaPhone]()

[Set-CsCommonAreaPhone]()

[Online Version](http://technet.microsoft.com/EN-US/library/af5f832c-1be9-4495-ba1a-c10ca50d7b29(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/af5f832c-1be9-4495-ba1a-c10ca50d7b29(OCS.16).aspx)

