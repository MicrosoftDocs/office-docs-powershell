---
external help file: New-CsOrganizationalAutoAttendantCallableEntity.xml
applicable: Skype for Business Online
title: New-CsOrganizationalAutoAttendantCallableEntity
schema: 2.0.0
---

# New-CsOrganizationalAutoAttendantCallableEntity

## SYNOPSIS
The New-CsOrganizationalAutoAttendantCallableEntity cmdlet lets you create a callable entity.

## SYNTAX

```
New-CsOrganizationalAutoAttendantCallableEntity -Identity <String> -Type <User | OrganizationalAutoAttendant | HuntGroup> [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The New-CsOrganizationalAutoAttendantCallableEntity cmdlet lets you create a callable entity for use with call transfers from the Auto Attendant service. Callable entities can be created using either SIP or TEL URIs and can refer to any of the following entities:

- User
- OrganizationalAutoAttendant
- HuntGroup


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$callableEntity = New-CsOrganizationalAutoAttendantCallableEntity -Identity sip:operator@contoso.com -Type User
```

This example creates a user callable entity.

### -------------------------- Example 2 --------------------------
```
$callableEntity = New-CsOrganizationalAutoAttendantCallableEntity -Identity "tel:+1234567890" -Type OrganizationalAutoAttendant
```

This example creates an auto attendant callable entity.

## PARAMETERS

### -Identity
The Identity parameter represents the ID of the callable entity; this can be either a SIP URI or a TEL URI.

- Only the SIP URIs of users that have Enterprise Voice enabled are supported.
- Only PSTN numbers that are acquired and assigned through Skype for Business Online are supported. 
- SIP URIs can be used for a user only.
- TEL URIs can be a user, an auto attendant, or a hunt group (call queue).

```yaml
Type: System.String
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Type
The Type parameter represents the type of the callable entity, which can be any of the following:

- User
- OrganizationalAutoAttendant
- Huntgroup


```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant

```yaml
Type: System.Guid
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.Hosted.OAA.Models.CallableEntity


## NOTES

## RELATED LINKS

