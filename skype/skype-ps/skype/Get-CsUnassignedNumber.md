---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Get-CsUnassignedNumber
schema: 2.0.0
---

# Get-CsUnassignedNumber

## SYNOPSIS
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
Unassigned numbers are phone numbers that have been assigned to an organization but that have not been assigned to specific users or phones.
Skype for Business Server can be set up to route calls to appropriate destinations when an unassigned number is called.
This cmdlet retrieves one or more unassigned number ranges that define that routing.



## EXAMPLES

### -------------------------- Example --------------------------
```
Get-CsUnassignedNumber
```

Example 1 returns a collection of all the unassigned numbers configured for use in your organization.

### -------------------------- Example --------------------------
```
Get-CsUnassignedNumber -Identity UNSet1
```

In Example 2, the Identity parameter is used to limit the retrieved data to unassigned numbers that have the Identity UNSet1.
Because identities must be unique, this command will return only the specified unassigned number range.

### -------------------------- Example --------------------------
```
Get-CsUnassignedNumber -Filter *Redmond*
```

This example uses the Filter parameter to return a collection of all the unassigned number settings with Identity values that include the string Redmond.
For example, this command would return unassigned number setting with identities such as Redmond Numbers, Unassigned Redmond Numbers, UNRedmond, etc.

### -------------------------- Example --------------------------
```
Get-CsUnassignedNumber | Where-Object {$_.AnnouncementName -match "Welcome"}
```

In Example 4, the Get-CsUnassignedNumber cmdlet and the Where-Object cmdlet are used to retrieve a collection of all the unassigned number settings that include the word Welcome in the name of the Announcement.
To do this, the command first uses the Get-CsUnassignedNumber cmdlet to retrieve all the unassigned number settings.
That collection is then piped to the Where-Object cmdlet, which applies a filter that limits the returned data to unassigned numbers that have the word Welcome somewhere in the name of the assigned announcement.

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

[New-CsUnassignedNumber]()

[Remove-CsUnassignedNumber]()

[Set-CsUnassignedNumber]()
