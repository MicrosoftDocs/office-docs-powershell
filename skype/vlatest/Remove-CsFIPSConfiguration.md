---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Remove-CsFIPSConfiguration

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Removes one or more collections of Federal Information Processing Standards (FIPS) configuration settings.
The FIPS standards are a set of United States government security standards required for use in computers maintained by non-military government agencies and by government contractors.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Removes one or more collections of Federal Information Processing Standards (FIPS) configuration settings.
The FIPS standards are a set of United States government security standards required for use in computers maintained by non-military government agencies and by government contractors.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
Remove-CsFIPSConfiguration [-Identity] <XdsIdentity> [-Confirm] [-Force] [-Tenant <Guid>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2013

The Federal Information Processing Standards (FIPS) are a series of standards and guidelines used by computers engaged in work for the United States government; for example, there are FIPS standards that govern the use of such things as cryptography, encryption, and digital signatures.
(See http://www.itl.nist.gov/fipspubs/by-num.htm (http://www.itl.nist.gov/fipspubs/by-num.htm) for more information.) Lync Server 2013 provides an option that enables the software to use only algorithms that meet the FIPS standards.
If you need to work with the United States government (or with other entities that follow FIPS) then you can enable FIPS compliance in Lync Server 2013.

Keep in mind, however, that, for the on-premises version of Lync Server, you have only a single, global collection of FIPS configuration settings: FIPS compliance can only be enabled or disabled for your entire Lync Server implementation.
You cannot selectively enable or disable FIPS compliance on, say, an individual site or an individual Registrar pool.
If you do enable FIPS compliance, you could potentially encounter problems when trying to communicate with organizations that do not fully adhere to the FIPS standards.

By default, FIPS compliance is disabled in Lync Server 2013 Preview.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Remove-CsFIPSConfiguration

Lync Server Control Panel: The functions carried out by the Remove-CsFIPSConfiguration cmdlet are not available in the Lync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

The Federal Information Processing Standards (FIPS) are a series of standards and guidelines used by computers engaged in work for the United States government; for example, there are FIPS standards that govern the use of such things as cryptography, encryption, and digital signatures.
(See http://www.itl.nist.gov/fipspubs/by-num.htm (http://www.itl.nist.gov/fipspubs/by-num.htm) for more information.) Skype for Business Server 2015 provides an option that enables the software to use only algorithms that meet the FIPS standards.
If you need to work with the United States government (or with other entities that follow FIPS) then you can enable FIPS compliance in Skype for Business Server 2015.

Keep in mind, however, that, for the on-premises version of Skype for Business Server 2015, you have only a single, global collection of FIPS configuration settings: FIPS compliance can only be enabled or disabled for your entire Skype for Business Server 2015 implementation.
You cannot selectively enable or disable FIPS compliance on, say, an individual site or an individual Registrar pool.
If you do enable FIPS compliance, you could potentially encounter problems when trying to communicate with organizations that do not fully adhere to the FIPS standards.

By default, FIPS compliance is disabled in Skype for Business Server 2015.

Skype for Business Server Control Panel: The functions carried out by the Remove-CsFIPSConfiguration cmdlet are not available in Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

Example 1 resets the properties in the global collection of FIPS configuration settings to their default values.

Remove-CsFIPSConfiguration -Identity "Global"

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 resets the properties in the global collection of FIPS configuration settings to their default values.

Remove-CsFIPSConfiguration -Identity "Global"

## PARAMETERS

### -Identity
**Below Content Applies To:** Lync Server 2013

Unique Identity of the FIPS configuration settings to be removed.
Because Lync Server 2013 Preview only supports a single, global collection of FIPS settings, the only collection that can be deleted is the global collection:

-Identity global

Note that, in this case, the global collection will not actually be removed from the system; Lync Server 2013 Preview does not support the deletion of the global settings.
Instead, the lone property in that collection - RequireFIPSCompliantMedia - will be reset to its default value of False.



**Below Content Applies To:** Skype for Business Server 2015

Unique Identity of the FIPS configuration settings to be removed.
Because Skype for Business Server 2015 only supports a single, global collection of FIPS settings, the only collection that can be deleted is the global collection:

-Identity global

Note that, in this case, the global collection will not actually be removed from the system; Skype for Business Server 2015 does not support the deletion of the global settings.
Instead, the lone property in that collection - RequireFIPSCompliantMedia - will be reset to its default value of False.



```yaml
Type: XdsIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 2
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

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

### -Tenant
**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account for the FIPS configuration settings being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Server 2015 tenant account for the FIPS configuration settings being deleted.
For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2013, Skype for Business Server 2015

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
Remove-CsFIPSConfiguration accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object

###  
The Remove-CsFIPSConfiguration cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object

## OUTPUTS

###  
None.
Instead, Remove-CsFIPSConfiguration deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object.

###  
None.
Instead, the Remove-CsFIPSConfiguration cmdlet deletes existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration object.

## NOTES

## RELATED LINKS

[Get-CsFIPSConfiguration]()

[New-CsFIPSConfiguration]()

[Set-CsFIPSConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/b7e43419-0154-4fed-bfc6-9053335ce5d8(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/b7e43419-0154-4fed-bfc6-9053335ce5d8(OCS.16).aspx)

