---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Grant-CsOUPermission
schema: 2.0.0
---

# Grant-CsOUPermission

## SYNOPSIS

Grants Skype for Business Server management rights on an Active Directory organizational unit (OU).
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Grant-CsOUPermission -ObjectType <ObjectType> -OU <String> [-Domain <Fqdn>] [-DomainController <Fqdn>]
 [-GlobalCatalog <Fqdn>] [-Force] [-Report <String>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION

If you have locked down your Active Directory domain (that is, if you have disabled permission inheritance) then the domain preparation that takes place when you install Skype for Business Server will not be able to add the rights needed to manage users, computers, contacts, application contacts, and InetOrg persons.
(Domain administrators will still be able to manage these objects, but no one else, including members of the RTCUniversalUserAdmins group, will have management rights.) In that case, you will need to use the Grant-CsOUPermission cmdlet to give the required security groups the required rights.
This must be done on a container-by-container basis.

Note that this cmdlet only grants rights to a set of predefined security groups; the cmdlet cannot be used to grant rights to arbitrary security groups or to individual users.

Rights granted by using the Grant-CsOUPermission cmdlet can later be removed by using the Revoke-CsOUPermission cmdlet.
If you run that cmdlet, then the groups initially granted the OU rights will no longer have those Skype for Business Server management rights for the specified Active Directory container.
In that case, you will need to be an enterprise administrator or a domain administrator in order to manage Skype for Business Server or one of its components.



## EXAMPLES

### -------------------------- EXAMPLE 1 -------------------------- 
```

Grant-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user"
```

The command shown in Example 1 grants user management rights (-ObjectType "user") to the Redmond OU in the domain litwareinc.com.


### -------------------------- EXAMPLE 2 -------------------------- 
```

Grant-CsOUPermission -OU "ou=Redmond,dc=litwareinc,dc=com" -ObjectType "user","contact","inetOrgPerson"
```

In Example 2, management rights are granted for three different objects (user, contact, inetOrgPerson) for the Redmond OU in the domain litwareinc.com.


### -------------------------- EXAMPLE 3 -------------------------- 
```

$x = "ou=Redmond,dc=litwareinc,dc=com", "ou=Dublin,dc=litwareinc,dc=com", "ou=Tokyo,dc=litwareinc,dc=com"

foreach ($i in $x) {Grant-CsOUPermission -OU $i -ObjectType "user"}
```

In Example 3, user management rights are simultaneously granted for three different OUs: Redmond, Dublin, and Tokyo.
To carry out this task, the first command in the example creates an array variable named $x; this variable holds the distinguished names of the three Active Directory OUs where rights will be granted.
In the second command, a foreach loop is created that takes each OU stored in the array and runs the Grant-CsOUPermission cmdlet against that organizational unit.
In turn, that command grants user management rights for each OU in the array.


## PARAMETERS

### -ObjectType

Type of object covered by these rights.
Valid values are:

User

Computer

Contact

AppContact

InetOrgPerson

Device (required for creating common area phones)

To assign multiple object types in the same command, separate the object types by using commas: `-ObjectType "user","computer","contact".`
Note, however, that you can only specify a maximum of three object types per command.



```yaml
Type: ObjectType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OU

Distinguished name of the OU where rights are to be granted.
For example:

`-OU "ou=Redmond,dc=litwareinc,dc=com"`

Note that you can only grant rights to a single OU per command.



```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain

Name of the domain where the OU is located.
If this parameter is not included, then the Grant-CsOUPermission cmdlet will look for the OU on the current domain.



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

### -DomainController

Enables administrators to specify the fully qualified domain name (FQDN) of the domain controller to be used when running the Grant-CsOUPermission cmdlet.
If not specified, the cmdlet will use the first available domain controller.



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

### -GlobalCatalog

FQDN of a global catalog server in your domain.
This parameter is not required if you are running the Grant-CsOUPermission cmdlet on a computer with an account in your domain.



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

### -Report

Enables you to specify a file path for the log file created when the cmdlet runs.
For example:

`-Report "C:\Logs\OUPermissions.html"`



```yaml
Type: String
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

### CommonParameters
This cmdlet supports the common parameters: `-Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).`

## INPUTS

###  
None.
The Grant-CsOUPermission cmdlet does not accept pipelined input.

## OUTPUTS

###  
The Grant-CsOUPermission cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Revoke-CsOUPermission](Revoke-CsOUPermission.md)

[Test-CsOUPermission](Test-CsOUPermission.md)

