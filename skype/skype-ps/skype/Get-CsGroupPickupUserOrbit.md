---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsGroupPickupUserOrbit
schema: 2.0.0
---

# Get-CsGroupPickupUserOrbit

## SYNOPSIS
Use the Get-CsGroupPickupUserOrbit cmdlet to get the group pickup orbit number for an Enterprise Voice user.

## SYNTAX

```
Get-CsGroupPickupUserOrbit [-User] <String> [-Force] [<CommonParameters>]
```

## DESCRIPTION

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsGroupPickupUserOrbit -User sip:ken.myer@contoso.com
```

The following example gets the group pickup orbit number of a user specified by SIP address.

### -------------------------- Example 2 --------------------------
```
Get-CsGroupPickupUserOrbit "Ken Myer"
```

The following example gets the group pickup orbit number by using the display name.
User is a positional parameter.
The first parameter after the cmdlet is assumed to be the User parameter value.

### -------------------------- Example 3 --------------------------
```
Get-CsUser "Ken Myer" | Get-CsGroupPickupUserOrbit
```

The following example gets the group pickup orbit numbers by piping the output of Get-CsUser to the Get-CsGroupPickupUserOrbit.


## PARAMETERS

### -User
Specifies the user whose group pickup orbit number will be retrieved.
Because User is a positional parameter, the -User syntax is not required.
The first parameter after the cmdlet is assumed to be the User parameter value.

Users can be specified using one of four formats: 1) the user's SIP address; 2) the user's user principal name (UPN); 3) the user's domain name and logon name, in the form domain\logon (for example, litwareinc\kenmyer); and, 4) the user's Active Directory display name (for example, Ken Myer).
You can also reference a user account by using the user's Active Directory distinguished name.

```yaml
Type: String
Parameter Sets: (All)
Aliases: DisplayName, SipAddress, Identity
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error messages and completes the cmdlet operation.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### Get-CsUser


## OUTPUTS

### Microsoft.Rtc.Management.Voice.Helpers.GroupPickup.DisplayGroupPickupUserOrbit


## NOTES


## RELATED LINKS

