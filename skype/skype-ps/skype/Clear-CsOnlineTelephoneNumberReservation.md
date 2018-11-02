---
external help file: 
applicable: Skype for Business Online
title: Clear-CsOnlineTelephoneNumberReservation
schema: 2.0.0
---

# Clear-CsOnlineTelephoneNumberReservation

## SYNOPSIS
Use the `Clear-CsOnlineTelephoneNumberReservation` cmdlet to clear a reserved list of telephone numbers before they are acquired.
The telephone numbers will then be available for search and reservation again.

## SYNTAX

```
Clear-CsOnlineTelephoneNumberReservation [-Tenant <Guid>] -ReservationId <String>
 -InventoryType <String> [-DomainController <Fqdn>] [-Force] [<CommonParameters>]
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
Type: String
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
Type: String
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
Type: Fqdn
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
Type: Guid
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
Indicates that this cmdlet runs as a background job.

When you specify the AsJob parameter, the command immediately returns an object that represents the background job. You can continue to work in the session while the job finishes. The job is created on the local computer and the results from the Skype for Business Online session are automatically returned to the local computer. To get the job results, use the Receive-Job cmdlet.

For more information about Windows PowerShell background jobs, see [about_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_jobs?view=powershell-6) and [about_Remote_Jobs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_remote_jobs?view=powershell-6).

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

[Online version:](https://docs.microsoft.com/en-us/powershell/module/skype/Clear-CsOnlineTelephoneNumberReservation?view=skype-ps)

