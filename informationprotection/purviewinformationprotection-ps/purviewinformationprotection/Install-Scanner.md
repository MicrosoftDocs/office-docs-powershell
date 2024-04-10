---
external help file: AIP.dll-Help.xml
Module Name: PurviewInformationProtection
online version: 
schema: 1.0.0
---

# Install-Scanner

## SYNOPSIS
Installs the Microsoft Purview Information Protection scanner.

## SYNTAX

```
Install-Scanner [-ServiceUserCredentials] <PSCredential> [-StandardDomainsUserAccount <PSCredential>]
 [-ShareAdminUserAccount <PSCredential>] [-SqlServerInstance] [-Cluster | -Profile <String>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The **Install-Scanner** cmdlet installs and configures the Microsoft Purview Information Protection scanner on a computer running Windows Server 2022, Windows Server 2019, Windows Server 2016, or Windows Server 2012 R2. 

The Microsoft Purview Information Protection scanner uses this service to scan files on data stores that use the Server Message Block (SMB) protocol, and on SharePoint on premises. Files that this scanner discovers can then be labeled to apply classification, and optionally, apply protection or remove protection.

For more information about how to configure the labels and policy settings, see: [Overview of sensitivity labels](/microsoft-365/compliance/sensitivity-labels)


> [!IMPORTANT]
> You must run this cmdlet before you run any other cmdlet for the Microsoft Purview Information Protection scanner.
> 
The command creates a Windows service named Information Protection Scanner. It also creates and configures a database on SQL Server to store configuration and operational information for the scanner. The service that you specify to run the scanner is automatically granted the required rights to read and write to the database that is created.

To run this command, you must have local administrator rights for the Windows Server computer, and Sysadmin rights on the instance of SQL Server that you will use for the scanner.

After you have run this command, use the Microsoft Purview compliance portal to configure the settings in the scanner cluster and specify the data repositories to scan. Before you run the scanner, you must run the [Set-Authentication](Set-Authentication.md) cmdlet one time to sign in to Azure AD for authentication and authorization. 

For step-by-step instructions to install, configure, and use the scanner, see [Learn about the information protection scanner](/information-protection/deploy-aip-scanner).


## EXAMPLES

### Example 1: Install the Microsoft Purview Information Protection Scanner service by using a SQL Server instance and a cluster
```
PS C:\> Install-Scanner -SqlServerInstance SQLSERVER1\AIPSCANNER -Cluster EU
```

This command installs the Microsoft Purview Information Protection Scanner service by using a SQL Server instance named **MIPSCANNER**, which runs on the server named **SQLSERVER1**. 

In addition, the installation creates the **AIPScannerUL_\<cluster name>** database name to store the scanner configuration, unless an existing database with the same name is already found.

You are prompted to provide the Active Directory account details for the scanner service account. 

The command displays the installation progress, where the install log is located, and the creation of the new Windows Application event log named Microsoft Purview Information Protection Scanner

At the end of the output, you see **The transacted install has completed**.

### Example 2: Install the Microsoft Purview Information Protection Scanner service by using the SQL Server default instance
```
PS C:\> Install-Scanner -SqlServerInstance SQLSERVER1 -Cluster EU
```

This command installs the Microsoft Purview Information Protection scanner service by using the SQL Server default instance that runs on the server named **SQLSERVER1**. 

As with the previous example, you are prompted for credentials, and then the command displays the progress, where the install log is located, and the creation of the new Windows Application event log.

### Example 3: Install the Microsoft Purview Information Protection scanner service by using SQL Server Express
```
PS C:\> Install-Scanner -SqlServerInstance SQLSERVER1\SQLEXPRESS -Cluster EU
```

This command installs the Microsoft Purview Information Protection Scanner service by using SQL Server Express that runs on the server named **SQLSERVER1**. 

As with the previous examples, you are prompted for credentials, and then the command displays the progress, where the install log is located, and the creation of the new Windows Application event log.

## PARAMETERS

### -Cluster

Specifies the name of the scanner's database for the scanner configuration, using the following syntax: **AIPScannerUL_<cluster_name>**. 

If the database that you name doesn't exist when the scanner is installed, this command creates it.

Using either this parameter or the **Profile** parameter is mandatory. We recommend using this parameter instead of the **Profile** parameter.


```yaml
Type: String
Parameter Sets: (All)
Aliases: Profile

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Profile
Specifies the name of the scanner's database for the scanner configuration.

Using either this parameter or the **Cluster** parameter is mandatory. We recommend using the **Cluster** parameter instead of the this parameter.

The database name for the scanner is **AIPScannerUL_\<profile_name>**. 

If the database that you name doesn't exist when the scanner is installed, this command creates it.


```yaml 
Type: String 
Parameter Sets: (All) 
Aliases: 
Required: False 
Position: Named 
Default value: None 
Accept pipeline input: False 
Accept wildcard characters: False 
```

### -ServiceUserCredentials
Specifies the account credentials used to run the Microsoft Purview Information Protection scanner. 

- The credentials used must be an Active Directory account. 

- Set the value of this parameter using the following syntax: `Domain\Username`. 

    For example: `contoso\scanneraccount`

- If you do not specify this parameter, you are prompted for the username and password.

For more information, see [Prerequisites for the Microsoft Purview Information Protection scanner](/information-protection/deploy-aip-scanner#prerequisites-for-the-azure-information-protection-scanner). 

> [!TIP]
> Use a **PSCredential** object by using the [Get-Credential](/powershell/module/microsoft.powershell.security/get-credential) cmdlet. In this case, you are prompted for the password only.
>
> For more information, type `Get-Help Get-Cmdlet`. 

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ShareAdminUserAccount
Specifies the credentials for a strong account in an on-premises network, used to get a full list of file share and NTFS permissions.

- The credentials used must be an Active Directory account with Administrator/FC rights on your network shares. This will usually be a Server Admin or Domain Admin.

- Set the value of this parameter using the following syntax: `Domain\Username`

    For example: `contoso\admin`

- If you do not specify this parameter, you are prompted for both the username and password.

> [!TIP]
> Use a **PSCredential** object by using the [**Get-Credential**](/powershell/module/microsoft.powershell.security/get-credential) cmdlet. In this case, you are prompted for the password only.
> 
>For more information, type `Get-Help Get-Cmdlet`.


```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SqlServerInstance
Specifies the SQL Server instance on which to create a database for the Microsoft Purview Information Protection scanner. 

For information about the SQL Server requirements, see [Prerequisites for the Microsoft Purview Information Protection scanner](/information-protection/deploy-aip-scanner#prerequisites-for-the-azure-information-protection-scanner).

- **For the default instance**, specify the server name. For example: **SQLSERVER1**. 

- **For a named instance**, specify the server name and instance name. For example: **SQLSERVER1\MIPSCANNER**. 

- **For SQL Server Express**, specify the server name and **SQLEXPRESS**. For example: **SQLSERVER1\SQLEXPRESS**.


```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StandardDomainsUserAccount
Specifies the credentials for a weak account in an on-premises network, used to check access for weak users on the network and expose discovered network shares.

- The credentials used must be an Active Directory account, and a user of the **Domain Users** group only.

- Set the value of this parameter using the following syntax: `Domain\Username`

    For example: `contoso\stduser`

- If you do not specify this parameter, you are prompted for both the username and password.

> [!TIP]
> Use a **PSCredential** object by using the [**Get-Credential**](/powershell/module/microsoft.powershell.security/get-credential) cmdlet. In this case, you are prompted for the password only.
> 
>For more information, type `Get-Help Get-Cmdlet`.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs. The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

[Get-ScannerConfiguration](Get-ScannerConfiguration.md)

[Get-ScanStatus](Get-ScanStatus.md)

[Set-ScannerDatabase](Set-ScannerDatabase.md)

[Set-ScannerConfiguration](Set-ScannerConfiguration.md)

[Start-Scan](Start-PScan.md)

[Uninstall-Scanner](Uninstall-Scanner.md)

[Update-ScannerDatabase](Update-ScannerDatabase.md)
