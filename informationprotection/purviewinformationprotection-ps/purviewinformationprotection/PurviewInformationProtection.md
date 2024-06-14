---
Module Name: PurviewInformationProtection
Module Guid: NA
Download Help Link: NA
Help Version: NA
Locale: en-US
---

# PurviewInformationProtection Module

## Using PowerShell with the Microsoft Purview Information Protection client
The Microsoft Purview Information Protection module is installed with the Microsoft Purview Information Protection client. The associated PowerShell module is *PurviewInformationProtection*.

The PurviewInformationProtection module enables you to manage the client by running commands for automation scripts; for example:

- [Install-Scanner](https://go.microsoft.com/fwlink/?linkid=2258955): Installs and configures the Information Protection Scanner service on a computer running Windows Server 2019, Windows Server 2016, or Windows Server 2012 R2.
- [Get-FileStatus](https://go.microsoft.com/fwlink/?linkid=2258952): Gets the Information Protection label and protection information for a specified file or files.
- [Start-Scan](https://go.microsoft.com/fwlink/?linkid=2258855): Instructs the Information Protection scanner to start a one-time scan cycle.
- [Set-FileLabel -Autolabel](https://go.microsoft.com/fwlink/?linkid=2259827): Scans a file to automatically set an information protection label for a file, according to conditions that are configured in the policy.

## Install the PurviewInformationProtection PowerShell module

### Installation prerequisites

- This module requires Windows PowerShell 4.0. This prerequisite is not checked during installation. Make sure that you have the correct version of PowerShell installed.
- Make sure that you have the most recent version of the PurviewInformationProtection PowerShell module (purviewinfoprotect.dll*) by running `Import-Module purviewinfoprotect`.

### Installation details

[Install and configure](/purview/deploy-scanner-configure-install.md) the full version of the Microsoft Purview Information Protection client.

The PurviewInformationProtection PowerShell module installs automatically when you install the full version of the information protection client. Alternatively, you can install the module only by using the *PowerShellOnly=true* parameter.

Thep module is installed in the **\ProgramFiles (x86)\PurviewInformationProtection**  folder, and then adds this folder to the `PSModulePath` system variable. The .dll file for this module is *purviewinfoprotect.dll*.

> [!IMPORTANT]
> The PurviewInformationProtection module doesn't support configuring advanced settings for labels or label policies. For more information on configuring these advanced settings, see [Custom configurations for the Microsoft Purview Information Protection client](#custom-configurations-for-the-microsoft-purview-information-protection-client).

> [!TIP]
> To use cmdlets with path lengths greater than 260 characters, use the following [group policy setting](https://learn.microsoft.com/archive/blogs/jeremykuhne/net-4-6-2-and-long-paths-on-windows-10) that is available starting Windows 10, version 1607:
**Local Computer Policy** > **Computer Configuration** > **Administrative Templates** > **All Settings** > **Enable Win32 long paths**
>
>For Windows Server 2016, you can use the same group policy setting when you install the latest Administrative Templates (.admx) for Windows 10.
>
>For more information, see the [Maximum Path Length Limitation](https://learn.microsoft.com/windows/desktop/FileIO/naming-a-file#maximum-path-length-limitation) section from the Windows 10 developer documentation.

## Prerequisites for using the PurviewInformationProtection PowerShell module

In addition to the prerequisites for installing the PurviewInformationProtection module, you must also activate the [Azure Rights Management service](https://learn.microsoft.com/azure/information-protection/what-is-azure-rms).

In some cases, you may want to [remove protection](https://go.microsoft.com/fwlink/?linkid=2259827) from files for others using your own account. For example, you may want to remove protection for others for the sake of data discovery or recovery. If you are using labels to apply protection, you can remove that protection by setting a new label that doesn't apply protection, or you can remove the label.

For cases like this, the following requirements must also be met:

- The [super user](azure/information-protection/configure-super-users) feature must be enabled for your organization.
- Your account must be configured an an Azure Rights Management super user.

## Running information protection labeling cmdlets unattended

By default, when you run the cmdlets for labeling, the commands run in your own user context in an interactive PowerShell session. To automate running sensitivity labeling cmdlets, read the following sections:

- [Prerequisites for automating labeling cmdlets](#prerequisites-for-automating-labeling-cmdlets)
- [Create and configure Microsoft Entra applications for Set-Authentication](#create-and-configure-microsoft-entra-applications-for-set-authentication)
- [Running the Set-Authentication cmdlet](#run-the-set-authentication-cmdlet)

### Prerequisites for automating labeling cmdlets

To run information protection labeling cmdlets unattended, use the following access details:

- **A Windows account** that can sign in interactively.
- **A Microsoft Entra account for delegated access**. For ease of administration, use a single account that's synchronized from Microsoft Entra to Microsoft Entra ID.

For the delegated user account, configure the following requirements:

| Requirement | Details |
| ----------- | ------- |
| Label policy | Make sure that you have a label policy assigned to this account and that the policy contains the published labels you want to use. <br><br> If you use label policies for different users, you might need to create a new label policy that publishes all your labels, and publish the policy to just this delegated user account. |
| Decrypting content | If this account needs to decrypt content, for example, to re-protect files and inspect files that others have protected, make this account an Azure Rights Management super user and make sure the super user feature is enabled. |
| Onboarding controls | If you have implemented [onboarding controls](azure/information-protection/activate-service#configuring-onboarding-controls-for-a-phased-deployment) for a phased deployment, make sure that this account is included in the onboarding controls you've configured. |

- **A Microsoft Entra access token** that sets and stores credentials for the delegated user to authenticate to Microsoft Purview Information Protection. When the token in Microsoft Entra ID expires, you must run the cmdlet again to acquire a new token.

The parameters for [Set-Authentication](https://go.microsoft.com/fwlink/?linkid=2258854) use values from an app registration process in Microsoft Entra ID.

Run the labeling cmdlets non-interactively by first running the `Set-Authentication` cmdlet. The computer running the cmdlet downloads the labeling policy that's assigned to your delegated user account in the Microsoft Purview portal.

### Create and configure Microsoft Entra applications for Set-Authentication

The `Set-Authentication` cmdlet requires an app registration for the *AppId* and *AppSecret* parameters.

To create a new app registration for the `Set-Authentication` cmdlet:

1. In a new browser window, sign in to the Azure portal to access the Microsoft Entra tenant that you use with Microsoft Purview Information Protection.

1. Navigate to **Microsoft Entra ID** > **Manage** > **App registrations**, and select **New registration**.

1. In the **Register an application** pane, specify the following values, and then click Register:

| Option | Value    |
| ------ | -----    |
| Name | `DelegatedUser` <br> Specify a different name as needed. The name must be unique per tenant.  |
| Supported account types | Select **Accounts** in this organizational directory only   |
| Redirect URI (optional) | Select **Web**, and then enter `https://localhost`.   |

4. In the **DelegatedUser** pane, copy the value for the **Application (client) ID**. The value looks similar to this example: `77c3c1c3-abf9-404e-8b2b-4652836c8c66`. <br><br> This value is used for the *AppId* parameter when you run the `Set-Authentication` cmdlet. Paste and save the value for later reference.

1. From the sidebar, select **Manage** > **Certificates & secrets**.

1. In the **DelegatedUser - Certificates & secrets** pane, in the **Client secrets** section, select **New client secret**.

1. For **Add a client secret**, specify the following, and then select **New client secret**.

| Field | Value |
| ----- | ----- |
| Description | `Purview Information Protection client` |
| Expires     | Specify your choice of duration (*1 year*, *2 years*, or *Never expires*) |

8. Back on the **AIP-DelegatedUser - Certificates & secrets** pane, in the **Client secrets* section**, copy the **VALUE** string. This string will resemble the following example: <br><br>
`OAkk+rnuYc/u+]ah2kNxVbtrDGbS47L4`

> [!IMPORTANT]
> **Save this string.** it is not displayed again and **cannot be retrieved later**.  As with any sensitive information that you use, store the saved string value securely and restrict access to it.

9. From the sidebar, select **Manage** > **API permissions**.

1. On the the **DelegatedUser --API permissions** page, select **Add a permission**.

1. On the the **Request API permissions** pane, make sure that you're on the **Microsoft APIs** tab, and select **Azure Rights Management Services**. <br><br> When you're prompted for the type of permissions that your application requires, select **Application permissions**.

1. For **Select permissions**, expand **Content** and select the following
    - **Content.DelegatedReader**
    - **Content.DelegatedWriter**

1. Choose **Add permissions**.

1. Back on the **AIP-DelegatedUser - API permissions** page, select **Add a permission** again.

1. In the **Request AIP permissions** pane, select **APIs my organization uses**, and search for **Microsoft Information Protection Sync Service.**

1. In the **Request API permissions** pane, select **Application permissions**.

1. For **Select permissions**, expand **UnifiedPolicy**, select **UnifiedPolicy.Tenant.Read**, and then choose **Add permissions**.

1. Back on the **AIP-DelegatedUser - API permissions page**, select **Grant admin consent for *<your tenant name>*** and select **Yes** at the confirmation prompt.

### Run the Set-Authentication cmdlet

Once you have configured your Microsoft Entra applications, run the `Set-Authentication`.

> [!IMPORTANT]
> You'll need your tenant ID to run this cmdlet. To get your tenant ID, open the Azure portal and navigate to **Microsoft Entra ID** > **Manage** > **Properties** > **Directory ID**.

1. Open Windows PowerShell with the **Run as administrator** option.

1. In your PowerShell session, create a variable to store the credentials of the Windows user account that will run non-interactively. For example, if you created a service account for the scanner.

### Prerequisites for running labeling cmdlets unattended

To run Purview Information Protection labeling cmdlets unattended, use the following access details:

- **A Windows account** that can sign in interactively.

- **a Microsoft Entra account**, for delegated access. For ease of administration, use a single account that's synchronized from Active Directory to Microsoft Entra ID.

    For the delegated user account:

    |Requirement  |Details  |
    |---------|---------|
    |**Label policy**     |  Make sure that you have a label policy assigned to this account and that the policy contains the published labels you want to use.   <br><br>If you use label policies for different users, you might need to create a new label policy that publishes all your labels, and publish the policy to just this delegated user account.    |
    |**Decrypting content**     |    If this account needs to decrypt content, for example, to reprotect files and inspect files that others have protected, make it a [super user](../configure-super-users.md) for Azure Information Protection and make sure the super user feature is enabled.     |
    |**Onboarding controls**     |    If you have implemented [onboarding controls](../activate-service.md#configuring-onboarding-controls-for-a-phased-deployment) for a phased deployment, make sure that this account is included in your onboarding controls you've configured.     |

- **a Microsoft Entra access token**, which sets and stores credentials for the delegated user to authenticate to Azure Information Protection. When the token in Microsoft Entra ID expires, you must run the cmdlet again to acquire a new token. 

    The parameters for **Set-Authentication** use values from an app registration process in Microsoft Entra ID. For more information, see [Create and configure Microsoft Entra applications for Set-Authentication](#create-and-configure-azure-ad-applications-for-set-aipauthentication).

Run the labeling cmdlets non-interactively by first running the [Set-Authentication](https://go.microsoft.com/fwlink/?linkid=2258854) cmdlet.

The computer running the **Authentication** cmdlet downloads the labeling policy that's assigned to your delegated user account in the Microsoft Purview compliance portal.

<a name='create-and-configure-azure-ad-applications-for-set-authentication'></a>

### Create and configure Microsoft Entra applications for Set-Authentication

The **Set-Authentication** cmdlet requires an app registration for the *AppId* and *AppSecret* parameters. 

**To create a new app registration for the unified labeling client Set-Authentication cmdlet**:

1. In a new browser window, sign in the [Azure portal](https://portal.azure.com/) to the Microsoft Entra tenant that you use with Azure Information Protection.

1. Navigate to **Microsoft Entra ID** > **Manage** > **App registrations**, and select **New registration**. 

1. On the **Register an application** pane, specify the following values, and then click **Register**:

    |Option  |Value  |
    |---------|---------|
    |**Name**     |  `AIP-DelegatedUser` <br>Specify a different name as needed. The name must be unique per tenant.       |
    |**Supported account types**     |   Select **Accounts in this organizational directory only**.      |
    |**Redirect URI (optional)**     |   Select **Web**, and then enter `https://localhost`.    |

1. On the **AIP-DelegatedUser** pane, copy the value for the **Application (client) ID**. 

    The value looks similar to the following example: `77c3c1c3-abf9-404e-8b2b-4652836c8c66`. 

    This value is used for the *AppId* parameter when you run the **Set-Authentication cmdlet**. Paste and save the value for later reference.

1. From the sidebar, select **Manage** > **Certificates & secrets**.

    Then, on the **AIP-DelegatedUser - Certificates & secrets** pane, in the **Client secrets** section, select **New client secret**.

1. For **Add a client secret**, specify the following, and then select **Add**:

    |Field  |Value  |
    |---------|---------|
    |**Description**     |  `Azure Information Protection unified labeling client`       |
    |**Expires**     |   Specify your choice of duration (1 year, 2 years, or never expires)     |

1. Back on the **AIP-DelegatedUser - Certificates & secrets** pane, in the **Client secrets** section, copy the string for the **VALUE**. 

    This string looks similar to the following example: `OAkk+rnuYc/u+]ah2kNxVbtrDGbS47L4`. 

    To make sure you copy all the characters, select the icon to **Copy to clipboard**. 
    
    > [!IMPORTANT]
    > It's important that you save this string because it is not displayed again and it cannot be retrieved. As with any sensitive information that you use, store the saved value securely and restrict access to it.
    > 

1. From the sidebar, select **Manage** > **API permissions**.

    On the **AIP-DelegatedUser - API permissions** pane, select **Add a permission**.

1. On the **Request API permissions** pane, make sure that you're on the **Microsoft APIs** tab, and select **Azure Rights Management Services**. 

    When you're prompted for the type of permissions that your application requires, select **Application permissions**.

1. For **Select permissions**, expand **Content** and select the following, and then select **Add permissions**.
    
    -  **Content.DelegatedReader** 
    -  **Content.DelegatedWriter**

1. Back on the **AIP-DelegatedUser - API permissions** pane, select **Add a permission** again.

    On the **Request AIP permissions** pane, select **APIs my organization uses**, and search for **Microsoft Information Protection Sync Service**.

1. On the **Request API permissions** pane, select **Application permissions**.
    
    For **Select permissions**, expand **UnifiedPolicy**, select **UnifiedPolicy.Tenant.Read**, and then select **Add permissions**.

1. Back on the **AIP-DelegatedUser - API permissions** pane, select **Grant admin consent for \<*your tenant name*>** and select **Yes** for the confirmation prompt.
    
    Your API permissions should look like the following image:

    :::image type="content" source="./media/api-permissions-app.png" alt-text="API permissions for the registered app in Microsoft Entra ID":::

Now you've completed the registration of this app with a secret, you're ready to run [Set-Authentication](https://go.microsoft.com/fwlink/?linkid=2258854) with the parameters *AppId*, and *AppSecret*. Additionally, you'll need your tenant ID. 

> [!TIP]
>You can quickly copy your tenant ID by using Azure portal: **Microsoft Entra ID** > **Manage** > **Properties** > **Directory ID**.

### Running the Set-Authentication cmdlet

1. Open Windows PowerShell with the **Run as administrator option**. 

1. In your PowerShell session, create a variable to store the credentials of the Windows user account that will run non-interactively. For example, if you created a service account for the scanner:

    ```PowerShell
    $pscreds = Get-Credential "CONTOSO\srv-scanner"
    ```

    You're prompted for this account's password.

1. Run the **Set-Authentication** cmdlet, with the *OnBeHalfOf* parameter, specifying as its value the variable that you created. 

    Also specify your app registration values, your tenant ID, and the name of the delegated user account in Microsoft Entra ID. For example:
    
    ```PowerShell
    Set-Authentication -AppId "77c3c1c3-abf9-404e-8b2b-4652836c8c66" -AppSecret "OAkk+rnuYc/u+]ah2kNxVbtrDGbS47L4" -TenantId "9c11c87a-ac8b-46a3-8d5c-f4d0b72ee29a" -DelegatedUser scanner@contoso.com -OnBehalfOf $pscreds
    ```
    
## Common parameters for PowerShell cmdlets

For information about common parameters, see [About common parameters](/powershell/module/microsoft.powershell.core/about/about_commonparameters).

## Next steps

For cmdlet help when you are in a PowerShell session, type `Get-Help <cmdlet name> -online`. For example: 

```PowerShell
Get-Help Set-FileLabel -online





## AzureInformationProtection Cmdlets
### [Add-ScannerRepository](Add-ScannerRepository.md)
Adds a repository to an Information Protection scanner content scan job.

### [Clear-Authentication](Clear-Authentication.md)
Clears the user settings and RMS templates for the current user.

### [Export-DebugLogs](Export-DebugLogs.md)
Gathers and exports Information Protection client and scanner log files to a compressed file.

### [Get-FileStatus](Get-FileStatus.md)
Gets the sensitivity label and protection information for a specified file or files. 

### [Get-ScannerConfiguration](Get-ScannerConfiguration.md)
Gets the configuration settings for the Information Protection scanner.

### [Get-ScannerContentScan](Get-ScannerContentScan.md)
Gets details about your content scan job.

### [Get-ScannerRepository](Get-ScannerRepository.md)
Gets repository data for an Information Protection scanner content scan job.

### [Get-ScanStatus](Get-ScanStatus.md)
Gets the current status of the service for the Azure Information Protection scanner.

### [Import-ScannerConfiguration](Import-ScannerConfiguration.md)
Imports a local configuration for the Information Protection scanner.

### [Install-Scanner](Install-Scanner.md)
Installs the Information Protection scanner.

### [New-CustomPermissions](New-CustomPermissions.md)
Creates an ad-hoc protection policy for custom permissions.

### [Remove-FileLabel](Remove-FileLabel.md)
Removes the sensitivity label from a file. 

### [Remove-ScannerContentScan](Remove-AIPScannerContentScanJob.md)
Deletes the entire Information Protection scanner content scan job.

### [Remove-ScannerRepository](Remove-ScannerRepository.md)
Removes a repository from an Information Protection scanner content scan job.

### [Set-Authentication](Set-Authentication.md)
Sets the authentication credentials for the Information Protection client.

### [Set-FileLabel](Set-FileLabel.md)
Sets or removes an Azure Information Protection label for a file mnaually or automatically, and sets or removes the protection according to the label configuration or custom permissions.

### [Set-ScannerDatabase](Set-ScannerDatabase.md)
Sets the service account and database for the Information Protection scanner.

### [Set-ScannerConfiguration](Set-ScannerConfiguration.md)
Sets optional configuration for the Information Protection scanner.

### [Set-ScannerContentScan](Set-ScannerContentScan.md)
Defines settings for an Information Protection content scan job.

### [Set-ScannerRepository](Set-ScannerRepository.md)
Updates an existing repository in an Information Protection scanner content scan job.

### [Start-Scan](Start-Scan.md)
Instructs the Information Protection scanner to start a one time scan cycle. 

### [Start-ScannerDiagnostics](Start-ScannerDiagnostics.md)
Starts a series of health checks for a locally installed Information Protection scanner service.

### [Stop-Scan](Stop-Scan.md)
Instructs the Information Protection scanner to immediately stop the currently running scan cycle.

### [Uninstall-Scanner](Uninstall-Scanner.md)
Uninstalls the Windows Server service for the Information Protection scanner.

### [Update-ScannerDatabase](Update-ScannerDatabase.md)
Updates the database schema for the Information Protection scanner.
