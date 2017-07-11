---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsAdminRoleAssignment

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Returns the role-based access control (RBAC) roles assigned to a user.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Returns the role-based access control (RBAC) roles assigned to a user.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Get-CsAdminRoleAssignment [-Identity] <String> [-Force] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Role-based access control (RBAC) enables administrators to delegate control of specific management tasks for Microsoft Lync Server 2010.
For example, instead of granting your organization's help desk full administrator privileges you can give these employees very specific rights: the right to manage only user accounts; the right to manage only Enterprise Voice components; and the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: one user can be given the right to manage Enterprise Voice, but only in the Redmond site; while another user can be given the right to manage user accounts, but only if those accounts are in the Finance organizational unit (OU).

The Get-CsAdminRoleAssignment cmdlet provides a way for you to retrieve a list of the RBAC roles that have been assigned to a user.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsAdminRoleAssignment cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the RBAC roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsAdminRoleAssignment"}

**Below Content Applies To:** Lync Server 2013

Role-based access control (RBAC) enables administrators to delegate control of specific management tasks for Lync Server.
For example, instead of granting your organization's help desk full administrator privileges you can give these employees very specific rights: the right to manage only user accounts; the right to manage only Enterprise Voice components; and the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: one user can be given the right to manage Enterprise Voice, but only in the Redmond site; while another user can be given the right to manage user accounts, but only if those accounts are in the Finance organizational unit (OU).

The Get-CsAdminRoleAssignment cmdlet provides a way for you to retrieve a list of the RBAC roles that have been assigned to a user.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsAdminRoleAssignment cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmins.
To return a list of all the RBAC roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsAdminRoleAssignment"}

**Below Content Applies To:** Skype for Business Server 2015

Role-based access control (RBAC) enables administrators to delegate control of specific management tasks for Skype for Business Server 2015.
For example, instead of granting your organization's help desk full administrator privileges you can give these employees very specific rights: the right to manage only user accounts; the right to manage only Enterprise Voice components; and the right to manage only archiving and Archiving Server.
In addition, these rights can be limited in scope: one user can be given the right to manage Enterprise Voice, but only in the Redmond site; while another user can be given the right to manage user accounts, but only if those accounts are in the Finance organizational unit (OU).

The Get-CsAdminRoleAssignment cmdlet provides a way for you to retrieve a list of the RBAC roles that have been assigned to a user.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsAdminRoleAssignment -Identity "kenmyer"
```

The command shown in Example 1 returns all of the RBAC roles assigned to the user kenmyer.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns all of the RBAC roles assigned to the user kenmyer.

Get-CsAdminRoleAssignment -Identity "kenmyer"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns all of the RBAC roles assigned to the user kenmyer.

Get-CsAdminRoleAssignment -Identity "kenmyer"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsUser | ForEach-Object {$_.DisplayName; Get-CsAdminRoleAssignment -Identity $_.SamAccountName}
```

The preceding command returns the RBAC roles for all of the users who have been enabled for Lync Server 2010.
To do this, the command begins by calling Get-CsUser without any parameters; that returns a collection of all the users in the organization who have been enabled for Lync Server 2010 or Office Communications Server.
This data is then piped to the ForEach-Object cmdlet, which loops through each user account in the collection and does the following: 1) echoes the user's display name to the screen; and 2) uses the Get-CsAdminRoleAssignment cmdlet to return the user's RBAC roles.
The user account information must be piped to ForEach-Object because Get-CsAdminRoleAssignment does not directly accept pipelined data.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns the RBAC roles for all of the users who have been enabled for Lync Server.
To do this, the command begins by calling Get-CsUser without any parameters; that returns a collection of all the users in the organization who have been enabled for Lync Server or Office Communications Server.
This data is then piped to the ForEach-Object cmdlet, which loops through each user account in the collection and does the following: 1) echoes the user's display name to the screen; and 2) uses the Get-CsAdminRoleAssignment cmdlet to return the user's RBAC roles.
The user account information must be piped to ForEach-Object because Get-CsAdminRoleAssignment does not directly accept pipelined data.

Get-CsUser | ForEach-Object {$_.DisplayName; Get-CsAdminRoleAssignment -Identity $_.SamAccountName}

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns the RBAC roles for all of the users who have been enabled for Skype for Business Server 2015.
To do this, the command begins by calling the Get-CsUser cmdlet without any parameters; that returns a collection of all the users in the organization who have been enabled for Skype for Business Server 2015.
This data is then piped to the ForEach-Object cmdlet, which loops through each user account in the collection and does the following: 1) echoes the user's display name to the screen; and 2) uses the Get-CsAdminRoleAssignment cmdlet to return the user's RBAC roles.
The user account information must be piped to the ForEach-Object cmdlet because the Get-CsAdminRoleAssignment cmdlet does not directly accept pipelined data.

Get-CsUser | ForEach-Object {$_.DisplayName; Get-CsAdminRoleAssignment -Identity $_.SamAccountName}

## PARAMETERS

### -Identity
SamAccountName of the user whose RBAC roles are to be returned, You can retrieve the SamAccountName for a user by using a command similar to this:

Get-CsUser "Ken Myer" | Select-Object SamAccountName

Note that you must use the SamAccountName when specifying the user Identity.
Other common values used when specifying identities, such as the Active Directory display name or the user's SIP address, will not work with Get-CsAdminRoleAssignment.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -LocalStore
Retrieves the RBAC role assignment data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
String.
Get-CsAdminRoleAssignment accepts a pipelined string value representing the SamAccountName of a user.

###  
String.
The Get-CsAdminRoleAssignment cmdlet accepts a pipelined string value representing the SamAccountName of a user.

## OUTPUTS

###  
Get-CsAdminRoleAssignment returns string values representing the RBAC roles held by the specified user.

###  
The Get-CsAdminRoleAssignment cmdlet returns string values representing the RBAC roles held by the specified user.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/61374f9b-e85a-4866-91f2-037a862ba0d6(OCS.14).aspx)

[Get-CsAdminRole]()

[Online Version](http://technet.microsoft.com/EN-US/library/61374f9b-e85a-4866-91f2-037a862ba0d6(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/61374f9b-e85a-4866-91f2-037a862ba0d6(OCS.16).aspx)

