---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsFIPSConfiguration

## SYNOPSIS
Returns information about the Federal Information Processing Standards (FIPS) configuration settings currently in use in the organization.
The FIPS standards are a set of United States government security standards required for use in computers maintained by non-military government agencies and by government contractors.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Filter
```
Get-CsFIPSConfiguration [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Identity
```
Get-CsFIPSConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

## DESCRIPTION
The Federal Information Processing Standards (FIPS) are a series of standards and guidelines used by computers engaged in work for the US government; for example, there are FIPS standards that govern the use of such things as cryptography, encryption, and digital signatures.
(See http://www.itl.nist.gov/fipspubs/by-num.htm (http://www.itl.nist.gov/fipspubs/by-num.htm) for more information.) Skype for Business Server provides an option that enables the software to use only algorithms that meet the FIPS standards.
If you need to work with the United States government (or with other entities that follow FIPS) then you can enable FIPS compliance in Skype for Business Server.

Keep in mind, however, that, for the on-premises version of Skype for Business Server, you have only a single, global collection of FIPS configuration settings: FIPS compliance can only be enabled or disabled for your entire Skype for Business Server implementation.
You cannot selectively enable or disable FIPS compliance on, say, an individual site or an individual Registrar pool.
If you do enable FIPS compliance, you could potentially encounter problems when trying to communicate with organizations that do not fully adhere to the FIPS standards.

By default, FIPS compliance is disabled in Skype for Business Server.

The functions carried out by the Get-CsFIPSConfiguration cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsFIPSConfiguration
```

The command shown in Example 1 returns information for all the FIPS configuration settings currently in use in the organization.
Note that there is only a single, global instance of FIPS configuration settings.


## PARAMETERS

### -Filter
Enables you to use wildcard values when referencing a collection of FIPS configuration settings.
Because you can only have a single, global instance of these settings there is no reason to use the Filter parameter.
However, if you prefer you can use the following syntax to reference the global settings:

`-Filter "g*"`

That syntax brings back all the FIPS configuration settings that have an Identity that begins with the letter "g".

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique Identity of the FIPS configuration settings.
Because you can only have a single, global instance of these settings, you do not need to specify an Identity when calling the Get-CsFIPSConfiguration cmdlet.
If you prefer, however, you can use the following syntax to reference the global settings:

`-Identity global`

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the FIPS configuration data from the local replica of the Central Management store rather than from the Central Management store itself.

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
Globally unique identifier (GUID) of the Skype for Business Online tenant account whose FIPS configuration settings are to be retrieved.

For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.FIPSConfiguration.FIPSConfiguration


## NOTES


## RELATED LINKS

[New-CsFIPSConfiguration]()

[Remove-CsFIPSConfiguration]()

[Set-CsFIPSConfiguration]()