---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016
schema: 2.0.0
---

# Get-AdServerSettings

## SYNOPSIS
!!! Exchange Server 2010

Use the Get-AdServerSettings cmdlet to view the Active Directory Domain Services (AD DS) environment settings in the current Windows PowerShell session. The Get-AdServerSettings cmdlet replaces the AdminSessionADSettings session variable that was used in Microsoft Exchange Server 2007.

!!! Exchange Server 2013

This cmdlet is available only in on-premises Exchange.

Use the Get-AdServerSettings cmdlet to view the Active Directory Domain Services (AD DS) environment settings in the current Windows PowerShell session. The Get-AdServerSettings cmdlet replaces the AdminSessionADSettings session variable that was used in Microsoft Exchange Server 2007.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

!!! Exchange Server 2016

This cmdlet is available only in on-premises Exchange.

Use the Get-AdServerSettings cmdlet to view the Active Directory Domain Services (AD DS) environment settings in the current Exchange Management Shell session. The Get-AdServerSettings cmdlet replaces the AdminSessionADSettings session variable that was used in Exchange Server 2007.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Get-AdServerSettings [<CommonParameters>]
```

## DESCRIPTION
!!! Exchange Server 2010

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Active Directory Domain Services server settings" entry in the Exchange and Shell Infrastructure Permissions topic.

!!! Exchange Server 2013

You need to be assigned permissions before you can run this cmdlet. Although all parameters for this cmdlet are listed in this topic, you may not have access to some parameters if they're not included in the permissions assigned to you. To see what permissions you need, see the "Active Directory Domain Services server settings" entry in the Exchange and Shell infrastructure permissions topic.

!!! Exchange Server 2016

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1 -------------------------- (Exchange Server 2010)
```
Get-AdServerSettings | Format-List
```

This example displays the session settings for the current session.


For more information about pipelining and the Format-List cmdlet, see Pipelining and Working with Command Output.

### Example 1 -------------------------- (Exchange Server 2013)
```
Get-AdServerSettings | Format-List
```

This example displays the session settings for the current session.


For more information about pipelining and the Format-List cmdlet, see Pipelining and Working with command output.

### Example 1 -------------------------- (Exchange Server 2016)
```
Get-AdServerSettings | Format-List
```

This example displays the session settings for the current session.


For more information about pipelining and the Format-List cmdlet, see Pipelining and Working with command output.

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/c09f17ff-7830-4a4e-a951-501bc44a26ab.aspx)

