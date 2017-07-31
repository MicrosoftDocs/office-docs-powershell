---
applicable: Skype for Business Online
schema: 2.0.0
---

# Clear-CsOnlineTelephoneNumberReservation

## SYNOPSIS
Use the Clear-CsOnlineTelephoneNumberReservation cmdlet to clear a reserved list of telephone numbers before they are acquired.
The telephone numbers will then be available for search and reservation again.

## SYNTAX

```
Clear-CsOnlineTelephoneNumberReservation [-InventoryType <Object>] [-ReservationId <Object>]
 [-BypassDualWrite <Object>] [-DomainController <Object>] [-Force] [-Tenant <Object>] [-AsJob]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet will fail if any of the numbers in the reservation have already been assigned.
An error message will identify the source of the failure.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Clear-CsOnlineTelephoneNumberReservation -ReservationId b1ae43f5-07ab-4b81-be32-4b8cc2d11f75 -InventoryType Service
```

This example clears a reservation with an inventory type of "Service".


## PARAMETERS

### -InventoryType
Specifies the target telephone number type for the cmdlet.
Acceptable values are:

- "Service" for numbers assigned to conferencing support.

- "Subscriber" for numbers supporting public switched telephone network (PSTN) functions.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ReservationId
Specifies the identification of the reservation you want to clear.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -BypassDualWrite
PARAMVALUE: $true | $false

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: DC
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
The Force switch specifies whether to suppress warning and confirmation messages.
It can be useful in scripting to suppress interactive prompts.
If the Force switch isn't provided in the command, you're prompted for administrative input if required.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
This parameter is reserved for internal Microsoft use.

```yaml
Type: Object
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AsJob
{{Fill AsJob Description}}

```yaml
Type: SwitchParameter
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
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None

## OUTPUTS

###  
None

## NOTES

## RELATED LINKS