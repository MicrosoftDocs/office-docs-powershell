---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsUnassignedNumber

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Retrieves one or more ranges of unassigned numbers and the routing rules that apply to those numbers.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Retrieves one or more ranges of unassigned numbers and the routing rules that apply to those numbers.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsUnassignedNumber [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsUnassignedNumber [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

Unassigned numbers are phone numbers that have been assigned to an organization but that have not been assigned to specific users or phones.
Microsoft Lync Server 2010 can be set up to route calls to appropriate destinations when an unassigned number is called.
This cmdlet retrieves one or more unassigned number ranges that define that routing.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUnassignedNumber cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmin.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsUnassignedNumber"}

**Below Content Applies To:** Lync Server 2013

Unassigned numbers are phone numbers that have been assigned to an organization but that have not been assigned to specific users or phones.
Lync Server can be set up to route calls to appropriate destinations when an unassigned number is called.
This cmdlet retrieves one or more unassigned number ranges that define that routing.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsUnassignedNumber cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins, RTCUniversalReadOnlyAdmin.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsUnassignedNumber"}

**Below Content Applies To:** Skype for Business Server 2015

Unassigned numbers are phone numbers that have been assigned to an organization but that have not been assigned to specific users or phones.
Skype for Business Server 2015 can be set up to route calls to appropriate destinations when an unassigned number is called.
This cmdlet retrieves one or more unassigned number ranges that define that routing.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2010)
```
Get-CsUnassignedNumber
```

Example 1 returns a collection of all the unassigned numbers configured for use in your organization.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns a collection of all the unassigned numbers configured for use in your organization.

Get-CsUnassignedNumber

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns a collection of all the unassigned numbers configured for use in your organization.

Get-CsUnassignedNumber

### -------------------------- Example 2 -------------------------- (Lync Server 2010)
```
Get-CsUnassignedNumber -Identity UNSet1
```

In Example 2, the Identity parameter is used to limit the retrieved data to unassigned numbers that have the Identity UNSet1.
Because identities must be unique, this command will return only the specified unassigned number range.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

In Example 2, the Identity parameter is used to limit the retrieved data to unassigned numbers that have the Identity UNSet1.
Because identities must be unique, this command will return only the specified unassigned number range.

Get-CsUnassignedNumber -Identity UNSet1

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

In Example 2, the Identity parameter is used to limit the retrieved data to unassigned numbers that have the Identity UNSet1.
Because identities must be unique, this command will return only the specified unassigned number range.

Get-CsUnassignedNumber -Identity UNSet1

### -------------------------- Example 3 -------------------------- (Lync Server 2010)
```
Get-CsUnassignedNumber -Filter *Redmond*
```

This example uses the Filter parameter to return a collection of all the unassigned number settings with Identity values that include the string Redmond.
For example, this command would return unassigned number setting with identities such as Redmond Numbers, Unassigned Redmond Numbers, UNRedmond, etc.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

This example uses the Filter parameter to return a collection of all the unassigned number settings with Identity values that include the string Redmond.
For example, this command would return unassigned number setting with identities such as Redmond Numbers, Unassigned Redmond Numbers, UNRedmond, etc.

Get-CsUnassignedNumber -Filter *Redmond*

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

This example uses the Filter parameter to return a collection of all the unassigned number settings with Identity values that include the string Redmond.
For example, this command would return unassigned number setting with identities such as Redmond Numbers, Unassigned Redmond Numbers, UNRedmond, etc.

Get-CsUnassignedNumber -Filter *Redmond*

### -------------------------- Example 4 -------------------------- (Lync Server 2010)
```
Get-CsUnassignedNumber | Where-Object {$_.AnnouncementName -match "Welcome"}
```

In Example 4, Get-CsUnassignedNumber and Where-Object are used to retrieve a collection of all the unassigned number settings that include the word Welcome in the name of the Announcement.
To do this, the command first uses Get-CsUnassignedNumber to retrieve all the unassigned number settings.
That collection is then piped to Where-Object, which applies a filter that limits the returned data to unassigned numbers that have the word Welcome somewhere in the name of the assigned announcement.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, Get-CsUnassignedNumber and Where-Object are used to retrieve a collection of all the unassigned number settings that include the word Welcome in the name of the Announcement.
To do this, the command first uses Get-CsUnassignedNumber to retrieve all the unassigned number settings.
That collection is then piped to Where-Object, which applies a filter that limits the returned data to unassigned numbers that have the word Welcome somewhere in the name of the assigned announcement.

Get-CsUnassignedNumber | Where-Object {$_.AnnouncementName -match "Welcome"}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, the Get-CsUnassignedNumber cmdlet and the Where-Object cmdlet are used to retrieve a collection of all the unassigned number settings that include the word Welcome in the name of the Announcement.
To do this, the command first uses the Get-CsUnassignedNumber cmdlet to retrieve all the unassigned number settings.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to unassigned numbers that have the word Welcome somewhere in the name of the assigned announcement.

Get-CsUnassignedNumber | Where-Object {$_.AnnouncementName -match "Welcome"}

## PARAMETERS

### -Identity
The unique name of the unassigned number range to retrieve.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Performs a wildcard search that allows you to narrow down your results to only those unassigned number settings whose identities match the given wildcard string.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the unassigned number information from the local replica of the Central Management store, rather than the Central Management store itself.

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
None.

## OUTPUTS

###  
Returns an object of type Microsoft.Rtc.Management.Voice.Helpers.DisplayAnnouncementVacantNumberRange.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/a8e5cfc1-e7a0-4917-9cd9-f541fedb3a61(OCS.14).aspx)

[New-CsUnassignedNumber]()

[Remove-CsUnassignedNumber]()

[Set-CsUnassignedNumber]()

[Online Version](http://technet.microsoft.com/EN-US/library/a8e5cfc1-e7a0-4917-9cd9-f541fedb3a61(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/a8e5cfc1-e7a0-4917-9cd9-f541fedb3a61(OCS.16).aspx)

